// Paschoalotto paleta
export const COLORS = {
  primary: {
    main: '#0051FF',
    hover: '#003FCC',
  },
  neutral: {
    black: '#000000',
    darkGray: '#4D4D4D',
    lightGray: '#F5F5F5',
    white: '#FFFFFF',
  },
  feedback: {
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
  },
} as const;

export const GITHUB_API = {
  baseUrl: 'https://api.github.com',
  endpoints: {
    user: (username: string) => `/users/${username}`,
    repos: (username: string) => `/users/${username}/repos?per_page=10&sort=updated`,
  },
} as const;

export const STORAGE_KEYS = {
  theme: 'theme',
  lastUsername: 'lastUsername',
} as const;

export const DEFAULT_USERNAME = 'analuiza2102';