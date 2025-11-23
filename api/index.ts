/**
 * API exports
 * Centralized API functions for the application
 */

export { apiClient } from './client';
export type { ApiError, ApiResponse } from './client';

// JSONPlaceholder API
export { jsonPlaceholderApi } from './jsonplaceholder';
export type { Comment, Post, User } from './jsonplaceholder';

