import { AlertCircle, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <Alert variant="destructive" className="max-w-md mx-auto">
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <span className="text-sm sm:text-base">{message}</span>
        {onRetry && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            className="w-full sm:w-auto sm:ml-2"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            <span className="sm:hidden">Tentar novamente</span>
            <span className="hidden sm:inline">Tentar novamente</span>
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}