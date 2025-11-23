/**
 * API exports
 * Centralized API functions for the application
 */

export { apiClient } from './client';
export type { ApiError, ApiResponse } from './client';

// Example API functions
// Uncomment and modify as needed for your API endpoints

// export const userApi = {
//   getProfile: () => apiClient.get('/user/profile'),
//   updateProfile: (data: any) => apiClient.put('/user/profile', data),
// };

// export const authApi = {
//   login: (email: string, password: string) =>
//     apiClient.post('/auth/login', { email, password }),
//   logout: () => apiClient.post('/auth/logout'),
//   register: (data: any) => apiClient.post('/auth/register', data),
// };

