import { ErrorState } from '@/components/error-state';
import { LoadingState } from '@/components/loading-state';
import { PostList } from '@/components/post-list';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { usePosts } from '@/hooks/use-posts';

export default function AboutScreen() {
  const { data: posts, isLoading, error, refetch, isRefetching } = usePosts();

  const handleRefresh = () => {
    refetch();
  };

  if (isLoading && !posts) {
    return (
      <Box className="flex-1 bg-background-0">
          <Box className="p-4">
            <Text className="text-typography-900 text-xl mb-4">
              Posts from JSONPlaceholder
            </Text>
          </Box>
          <LoadingState message="Loading posts..." />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="flex-1 bg-background-0">
          <Box className="p-4">
            <Text className="text-typography-900 text-xl mb-4">
              Posts from JSONPlaceholder
            </Text>
          </Box>
          <ErrorState 
            message={error.message || 'Failed to load posts'} 
            onRetry={handleRefresh}
          />
      </Box>
    );
  }

  return (
    <Box className="flex-1 bg-background-0">
        <Box className="p-4">
          <Text className="text-typography-900 text-xl font-semibold mb-1">
            Posts from JSONPlaceholder
          </Text>
          <Text className="text-typography-500 text-sm">
            {posts?.length || 0} posts loaded
          </Text>
        </Box>
        <PostList 
          posts={posts || []} 
          isLoading={isLoading}
          onRefresh={handleRefresh}
          refreshing={isRefetching}
        />
    </Box>
  );
}

