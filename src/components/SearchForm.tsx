import { useState } from 'react';
import { Search, AlertCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { isValidGitHubUsername, formatUsername } from '../utils/validators';

interface SearchFormProps {
  onSearch: (username: string) => void;
  onClear?: () => void;
  loading: boolean;
  hasResults: boolean;
}

export function SearchForm({ onSearch, onClear, loading, hasResults }: SearchFormProps) {
  const [username, setUsername] = useState('');
  const [validationError, setValidationError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedUsername = formatUsername(username);
    
    if (!formattedUsername) {
      setValidationError('Por favor, digite um nome de usuário');
      return;
    }
    
    if (!isValidGitHubUsername(formattedUsername)) {
      setValidationError('Nome de usuário inválido. Use apenas letras, números e hífens.');
      return;
    }
    
    setValidationError('');
    onSearch(formattedUsername);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (validationError) {
      setValidationError('');
    }
  };

  const handleClear = () => {
    setUsername('');
    setValidationError('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className="w-full max-w-md px-4 sm:px-0">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Label htmlFor="username" className="sr-only">
            Nome de usuário do GitHub
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="Digite o username do GitHub"
            value={username}
            onChange={handleInputChange}
            disabled={loading}
            className={`w-full ${validationError ? 'border-destructive' : ''}`}
            aria-invalid={!!validationError}
            aria-describedby={validationError ? 'username-error' : undefined}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            type="submit"
            disabled={loading || !username.trim()}
            className="flex-1 sm:flex-initial px-4 sm:px-6"
          >
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
          {hasResults && onClear && (
            <Button
              type="button"
              variant="outline"
              onClick={handleClear}
              disabled={loading}
              className="px-3 sm:px-4"
              aria-label="Limpar busca e voltar ao início"
            >
              <X className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Limpar</span>
            </Button>
          )}
        </div>
      </form>
      
      {validationError && (
        <div id="username-error" className="flex items-center gap-1 mt-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{validationError}</span>
        </div>
      )}
    </div>
  );
}