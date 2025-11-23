import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <Box className="flex-1 bg-background-0">
  
        <ScrollView className="flex-1">
          <Box className="p-4">
            <Box className="mb-2">
              <Box className="w-20 h-20 rounded-full bg-primary-500 items-center justify-center mb-4">
                <Text className="text-typography-0 text-2xl font-bold">
                  JD
                </Text>
              </Box>
              <Text className="text-typography-900 text-lg font-semibold mb-1">
                John Doe
              </Text>
              <Text className="text-typography-700">
                john.doe@example.com
              </Text>
            </Box>
            <Box className="gap-3">
              <Button>
                <ButtonText>Edit Profile</ButtonText>
              </Button>
              <Button variant="outline" action="secondary">
                <ButtonText>Settings</ButtonText>
              </Button>
            </Box>
          </Box>
        </ScrollView>

    </Box>
  );
}

