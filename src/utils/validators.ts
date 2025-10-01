export function isValidGitHubUsername(username: string): boolean {
  // GitHub username validation rules:
  // - Only contain alphanumeric characters and hyphens
  // - Cannot start or end with a hyphen
  // - Cannot have consecutive hyphens
  // - Must be between 1-39 characters
  const usernameRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/;
  
  return usernameRegex.test(username) && !username.includes('--');
}

export function sanitizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

export function formatUsername(username: string): string {
  return sanitizeUsername(username);
}