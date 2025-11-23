import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { ActivityIndicator } from 'react-native';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <Box className="flex-1 items-center justify-center p-4">
      <ActivityIndicator size="large" color="#333333" />
      <Text className="text-typography-500 mt-4">{message}</Text>
    </Box>
  );
}

