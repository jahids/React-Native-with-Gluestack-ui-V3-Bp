import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <Box className="flex-1 bg-background-0">
      <SafeAreaView edges={['top']} className="flex-1">
        <ScrollView className="flex-1">
          <Box className="p-4">
            <Text className="text-typography-900 text-xl mb-4">
              About Us
            </Text>
            <Text className="text-typography-700 mb-4">
              Welcome to Clion! We're building amazing mobile experiences.
            </Text>
            <Box className="mt-4">
              <Text className="text-typography-900 font-semibold mb-2">
                Version
              </Text>
              <Text className="text-typography-700">
                1.0.0
              </Text>
            </Box>
            <Box className="mt-4">
              <Text className="text-typography-900 font-semibold mb-2">
                Description
              </Text>
              <Text className="text-typography-700">
                A production-ready Expo React Native application built with Gluestack UI v3, Zustand, and NativeWind.
              </Text>
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}

