import { useEffect } from 'react';
import { Github } from 'lucide-react';
import { SearchForm } from './components/SearchForm';
import { UserProfile } from './components/UserProfile';
import { UserProfileSkeleton } from './components/UserProfileSkeleton';
import { ErrorMessage } from './components/ErrorMessage';
import { ThemeToggle } from './components/ThemeToggle';
import { HomePage } from './components/HomePage';
import { useGitHubUser } from './hooks/useGitHubUser';
import { STORAGE_KEYS } from './utils/constants';

export default function App() {
  // Clear any cached search on app initialization to always start with HomePage
  useEffect(() => {
    localStorage.removeItem(STORAGE_KEYS.lastUsername);
  }, []);

  const { user, repos, loading, error, searchUser, clearSearch } = useGitHubUser();

  const handleRetry = () => {
    if (user) {
      searchUser(user.login);
    }
  };

  const hasResults = loading === 'success' || loading === 'error';

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h1 className="text-lg sm:text-xl font-medium">
                <span className="hidden sm:inline">GitHub Profile Viewer</span>
                <span className="sm:hidden">GitHub Profile</span>
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {!hasResults && (
            <div className="text-center space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl">Buscar perfil do GitHub</h2>
              <p className="text-muted-foreground max-w-md px-4 sm:px-0">
                Digite o nome de usuário para visualizar o perfil e repositórios do GitHub
              </p>
            </div>
          )}

          <SearchForm 
            onSearch={searchUser}
            onClear={clearSearch}
            loading={loading === 'loading'}
            hasResults={hasResults}
          />

          <div 
            className="w-full flex justify-center"
            role="region"
            aria-live="polite"
            aria-label="Resultados da busca"
          >
            {loading === 'idle' && <HomePage />}
            
            {loading === 'loading' && <UserProfileSkeleton />}
            
            {loading === 'error' && error && (
              <ErrorMessage 
                message={error} 
                onRetry={handleRetry}
              />
            )}
            
            {loading === 'success' && user && (
              <UserProfile user={user} repos={repos} />
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-8 sm:mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-sm text-muted-foreground">
          <p>
            Desenvolvido por{' '}
            <a 
              href="https://github.com/analuiza2102" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              analuiza2102
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}