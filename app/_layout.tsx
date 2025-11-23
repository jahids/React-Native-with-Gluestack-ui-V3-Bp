import { QueryProvider } from '@/components/query-provider';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { useThemeStore } from '@/store/theme-store';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const { mode } = useThemeStore();
  
  // Convert 'system' to 'light' or 'dark' based on device preference
  const themeMode = mode === 'system' ? 'light' : mode;

  return (
    <QueryProvider>
      <GluestackUIProvider mode={themeMode}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </GluestackUIProvider>
    </QueryProvider>
  );
}
