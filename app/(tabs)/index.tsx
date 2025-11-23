    import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

    export default function HomeScreen() {
    return (
        <Box className="flex-1 bg-background-0">
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1">
            <Box className="p-4">
                <Text className="text-typography-900 text-xl mb-4">
                Welcome to Clion
                </Text>
                <Text className="text-typography-700">
                This is your home screen. Start building your amazing app!
                </Text>
            </Box>
            </ScrollView>
        </SafeAreaView>
        </Box>
    );
    }

