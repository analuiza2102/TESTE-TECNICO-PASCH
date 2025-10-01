export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  company: string;
  blog: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
}

export interface GitHubApiError {
  message: string;
  status: number;
}

class GitHubApiService {
  private baseUrl = 'https://api.github.com';
  private cache = new Map<string, { data: any; timestamp: number }>();
  private cacheTimeout = 5 * 60 * 1000; // 5 minutes

  private async fetchWithCache<T>(url: string): Promise<T> {
    const cached = this.cache.get(url);
    const now = Date.now();

    if (cached && (now - cached.timestamp) < this.cacheTimeout) {
      return cached.data;
    }

    const response = await fetch(url);
    
    if (!response.ok) {
      const error: GitHubApiError = {
        message: response.status === 404 ? 'Usuário não encontrado' : 'Erro na API do GitHub',
        status: response.status
      };
      throw error;
    }

    const data = await response.json();
    this.cache.set(url, { data, timestamp: now });
    
    return data;
  }

  async getUser(username: string): Promise<GitHubUser> {
    return this.fetchWithCache<GitHubUser>(`${this.baseUrl}/users/${username}`);
  }

  async getUserRepos(username: string): Promise<GitHubRepo[]> {
    return this.fetchWithCache<GitHubRepo[]>(
      `${this.baseUrl}/users/${username}/repos?per_page=10&sort=updated`
    );
  }
}

export const githubApi = new GitHubApiService();