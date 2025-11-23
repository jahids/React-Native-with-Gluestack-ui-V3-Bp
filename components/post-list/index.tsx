import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Post } from '@/api/jsonplaceholder';
import { PostCard } from '../post-card';

interface PostListProps {
  posts: Post[];
  isLoading?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export function PostList({ posts, isLoading, onRefresh, refreshing }: PostListProps) {
  const renderItem: ListRenderItem<Post> = ({ item }) => (
    <PostCard post={item} />
  );

  const renderEmpty = () => (
    <Box className="p-4 items-center justify-center">
      <Text className="text-typography-500 text-center">
        No posts available
      </Text>
    </Box>
  );

  if (isLoading && posts.length === 0) {
    return (
      <Box className="flex-1 items-center justify-center p-4">
        <Text className="text-typography-500">Loading posts...</Text>
      </Box>
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      ListEmptyComponent={renderEmpty}
      onRefresh={onRefresh}
      refreshing={refreshing}
      showsVerticalScrollIndicator={false}
    />
  );
}

