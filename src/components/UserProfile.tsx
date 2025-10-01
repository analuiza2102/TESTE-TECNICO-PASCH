import { MapPin, Building, Globe, Users, UserCheck, GitFork, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { GitHubUser, GitHubRepo } from '../services/githubApi';

interface UserProfileProps {
  user: GitHubUser;
  repos: GitHubRepo[];
}

export function UserProfile({ user, repos }: UserProfileProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      C: '#555555',
      Go: '#00ADD8',
      Rust: '#dea584',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
      Dart: '#00B4AB',
      HTML: '#e34c26',
      CSS: '#1572B6',
    };
    return colors[language || ''] || '#6b7280';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <Card>
        <CardHeader className="text-center pb-4 sm:pb-6">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
              <AvatarImage src={user.avatar_url} alt={`Avatar de ${user.login}`} />
              <AvatarFallback>{user.login.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-xl sm:text-2xl">{user.name || user.login}</h1>
              <p className="text-muted-foreground text-sm sm:text-base">@{user.login}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {user.bio && (
            <p className="text-center max-w-2xl mx-auto px-2 sm:px-0 text-sm sm:text-base">{user.bio}</p>
          )}
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground px-2 sm:px-0">
            {user.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate max-w-24 sm:max-w-none">{user.location}</span>
              </div>
            )}
            {user.company && (
              <div className="flex items-center gap-1">
                <Building className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate max-w-24 sm:max-w-none">{user.company}</span>
              </div>
            )}
            {user.blog && (
              <div className="flex items-center gap-1">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <a
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors truncate max-w-28 sm:max-w-none"
                >
                  {user.blog}
                </a>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="p-2 sm:p-3">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-sm sm:text-base font-medium">{user.followers}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Seguidores</p>
            </div>
            <div className="p-2 sm:p-3">
              <div className="flex items-center justify-center gap-1 mb-1">
                <UserCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-sm sm:text-base font-medium">{user.following}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Seguindo</p>
            </div>
            <div className="p-2 sm:p-3">
              <div className="flex items-center justify-center gap-1 mb-1">
                <GitFork className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-sm sm:text-base font-medium">{user.public_repos}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Repositórios</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="w-full sm:w-auto">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                Ver no GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {repos.length > 0 && (
        <Card>
          <CardHeader className="pb-4 sm:pb-6">
            <h2 className="text-lg sm:text-xl">Repositórios Recentes</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="p-3 sm:p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="space-y-2 sm:space-y-3">
                    {/* Header com nome e link */}
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm sm:text-base leading-tight">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors break-words"
                            style={{ wordBreak: 'break-word' }}
                          >
                            {repo.name}
                          </a>
                        </h3>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        asChild 
                        className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 p-0"
                      >
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver repositório ${repo.name}`}
                        >
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        </a>
                      </Button>
                    </div>
                    
                    {/* Descrição */}
                    {repo.description && (
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {repo.description}
                      </p>
                    )}
                    
                    {/* Metadados */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                        {repo.language && (
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <div
                              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                              aria-hidden="true"
                            />
                            <span className="text-xs sm:text-sm">{repo.language}</span>
                          </div>
                        )}
                        <Badge variant="secondary" className="text-xs flex-shrink-0">
                          ⭐ {repo.stargazers_count}
                        </Badge>
                      </div>
                      <div className="flex-shrink-0 text-xs sm:text-sm">
                        <span className="sm:hidden">Atualizou {formatDate(repo.updated_at)}</span>
                        <span className="hidden sm:inline">Atualizado em {formatDate(repo.updated_at)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}