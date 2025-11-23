import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import {
    BellIcon, Icon, MenuIcon, MoonIcon, SearchIcon,
    SunIcon
} from '@/components/ui/icon';
import { useThemeStore } from '@/store/theme-store';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Platform, StatusBar } from 'react-native';

export interface AppBarProps {
  title?: string;
  showBack?: boolean;
  onBackPress?: () => void;
  rightActions?: React.ReactNode;
  showSearch?: boolean;
  onSearchPress?: () => void;
  showNotifications?: boolean;
  onNotificationPress?: () => void;
}

export function AppBar({
  title = 'Clion',
  showBack = false,
  onBackPress,
  rightActions,
  showSearch = true,
  onSearchPress,
  showNotifications = true,
  onNotificationPress,
}: AppBarProps) {
  const { mode, toggleTheme } = useThemeStore();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark' || mode === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <Box
        className="flex-row items-center justify-between px-4 py-3 bg-background-0 border-b border-outline-200 "
        style={{
          paddingTop: Platform.OS === 'ios' ? 50 : 20,
        }}
      >
        {/* Left Section */}
        <Box className="flex-row items-center flex-1">
          {showBack && (
            <Button
              variant="link"
              size="sm"
              onPress={onBackPress}
              className="mr-2"
            >
              <Icon as={MenuIcon} size="md" className="text-typography-900" />
            </Button>
          )}
          <Heading size="lg" className="text-typography-900 flex-1">
            {title}
          </Heading>
        </Box>

        {/* Right Section */}
        <Box className="flex-row items-center gap-2">
          {showSearch && (
            <Button
              variant="link"
              size="sm"
              onPress={onSearchPress}
              className="p-2"
            >
              <Icon as={SearchIcon} size="md" className="text-typography-900" />
            </Button>
          )}

          {showNotifications && (
            <Button
              variant="link"
              size="sm"
              onPress={onNotificationPress}
              className="p-2"
            >
              <Icon as={BellIcon} size="md" className="text-typography-900" />
            </Button>
          )}

          <Button
            variant="link"
            size="sm"
            onPress={toggleTheme}
            className="p-2"
          >
            <Icon
              as={isDark ? SunIcon : MoonIcon}
              size="md"
              className="text-typography-900"
            />
          </Button>

          {rightActions}
        </Box>
      </Box>
    </>
  );
}

