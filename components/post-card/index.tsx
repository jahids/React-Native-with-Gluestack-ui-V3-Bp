import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Post } from '@/api/jsonplaceholder';
import { truncate } from '@/utils/helpers';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Box className="bg-background-50 rounded-lg p-4 mb-3 border border-outline-200">
      <Box className="mb-2">
        <Text className="text-primary-500 text-xs font-semibold mb-1">
          Post #{post.id} • User {post.userId}
        </Text>
        <Text className="text-typography-900 text-base font-semibold mb-2">
          {post.title}
        </Text>
      </Box>
      <Text className="text-typography-700 text-sm leading-5">
        {truncate(post.body, 150)}
      </Text>
    </Box>
  );
}


