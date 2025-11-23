import { useQuery } from '@tanstack/react-query';
import { jsonPlaceholderApi, Post } from '@/api/jsonplaceholder';
import { logger } from '@/utils/logger';

export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: async () => {
      logger.info('Fetching posts from JSONPlaceholder');
      return jsonPlaceholderApi.getPosts();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const usePost = (id: number) => {
  return useQuery<Post, Error>({
    queryKey: ['post', id],
    queryFn: async () => {
      logger.info(`Fetching post ${id} from JSONPlaceholder`);
      return jsonPlaceholderApi.getPost(id);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};


