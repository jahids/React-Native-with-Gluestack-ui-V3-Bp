// App Constants
export const APP_NAME = 'Clion';

// API Constants
export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com';
export const API_TIMEOUT = 30000; // 30 seconds

// Storage Keys
export const STORAGE_KEYS = {
  THEME: 'theme-storage',
  AUTH_TOKEN: 'auth-token',
  USER_DATA: 'user-data',
} as const;

// Screen Names
export const SCREEN_NAMES = {
  HOME: 'home',
  PROFILE: 'profile',
  SETTINGS: 'settings',
} as const;

