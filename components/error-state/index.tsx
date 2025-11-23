import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ 
  message = 'Something went wrong', 
  onRetry 
}: ErrorStateProps) {
  return (
    <Box className="flex-1 items-center justify-center p-4">
      <Text className="text-error-500 text-lg font-semibold mb-2">
        Error
      </Text>
      <Text className="text-typography-500 text-center mb-4">
        {message}
      </Text>
      {onRetry && (
        <Button onPress={onRetry} size="sm">
          <ButtonText>Retry</ButtonText>
        </Button>
      )}
    </Box>
  );
}


