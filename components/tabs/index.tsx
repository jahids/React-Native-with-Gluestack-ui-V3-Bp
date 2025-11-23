/**
 * Tabs Component
 * 
 * A reusable tabs component that generates tab navigation from configuration.
 * 
 * Usage:
 * ```tsx
 * import { TabsComponent } from '@/components/tabs';
 * import { tabsConfig } from '@/config/tabs-config';
 * 
 * <TabsComponent tabsConfig={tabsConfig} />
 * ```
 * 
 * Simply modify the tabsConfig array to customize tabs.
 */

import { Icon } from '@/components/ui/icon';
import { TabConfig } from '@/config/tabs-config';
import { useThemeStore } from '@/store/theme-store';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';

interface TabsComponentProps {
  tabsConfig: TabConfig[];
}

export function TabsComponent({ tabsConfig }: TabsComponentProps) {
  const { mode } = useThemeStore();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark' || mode === 'dark';

  const getIconColor = (tab: TabConfig, focused: boolean) => {
    if (focused) {
      return tab.focusedColor || (isDark ? 'text-typography-0' : 'text-typography-900');
    }
    return tab.unfocusedColor || (isDark ? 'text-typography-700' : 'text-typography-500');
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDark ? '#E6E6E6' : '#333333',
        tabBarInactiveTintColor: isDark ? '#737373' : '#A3A3A3',
        tabBarStyle: {
          backgroundColor: isDark ? '#181718' : '#FFFFFF',
          borderTopColor: isDark ? '#262626' : '#E5E5E5',
          borderTopWidth: 1,
          paddingTop: 3,
          paddingBottom:5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      {tabsConfig.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <Icon
                as={tab.icon}
                size="md"
                className={getIconColor(tab, focused)}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

