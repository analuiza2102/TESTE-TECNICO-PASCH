import { useState, useEffect } from 'react';
import { githubApi, GitHubUser, GitHubRepo, GitHubApiError } from '../services/githubApi';
import { DEFAULT_USERNAME, STORAGE_KEYS } from '../utils/constants';

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export function useGitHubUser(initialUsername?: string) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  const searchUser = async (username: string) => {
    if (!username.trim()) return;

    setLoading('loading');
    setError(null);

    try {
      const [userData, reposData] = await Promise.all([
        githubApi.getUser(username),
        githubApi.getUserRepos(username)
      ]);

      setUser(userData);
      setRepos(reposData);
      setLoading('success');
      
      // Save last searched username
      localStorage.setItem(STORAGE_KEYS.lastUsername, username);
    } catch (err) {
      const apiError = err as GitHubApiError;
      setError(apiError.message);
      setLoading('error');
      setUser(null);
      setRepos([]);
    }
  };

  const clearSearch = () => {
    setUser(null);
    setRepos([]);
    setLoading('idle');
    setError(null);
    // Clear last searched username
    localStorage.removeItem(STORAGE_KEYS.lastUsername);
  };

  useEffect(() => {
    // Only load a user if explicitly provided via initialUsername parameter
    if (initialUsername) {
      searchUser(initialUsername);
    }
    // Always start in idle state to show HomePage by default
  }, [initialUsername]);

  return {
    user,
    repos,
    loading,
    error,
    searchUser,
    clearSearch
  };
}