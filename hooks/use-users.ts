import { useQuery } from '@tanstack/react-query';
import { jsonPlaceholderApi, User } from '@/api/jsonplaceholder';
import { logger } from '@/utils/logger';

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: async () => {
      logger.info('Fetching users from JSONPlaceholder');
      return jsonPlaceholderApi.getUsers();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useUser = (id: number) => {
  return useQuery<User, Error>({
    queryKey: ['user', id],
    queryFn: async () => {
      logger.info(`Fetching user ${id} from JSONPlaceholder`);
      return jsonPlaceholderApi.getUser(id);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

