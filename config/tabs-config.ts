/**
 * Tabs Configuration
 * 
 * This file defines the tab navigation structure.
 * Simply modify this array to add, remove, or reorder tabs.
 * 
 * Each tab configuration includes:
 * - name: The route name (must match the file name in app/(tabs)/)
 * - route: The navigation route path
 * - title: Display name in the tab bar
 * - icon: Icon component from @/components/ui/icon
 * - focusedColor: Tailwind class for active tab icon color
 * - unfocusedColor: Tailwind class for inactive tab icon color
 */

import {
    HomeIcon,
    InfoIcon,
    PhoneIcon,
    UserIcon,
} from '@/components/ui/icon';

export interface TabConfig {
  name: string;
  route: string;
  title: string;
  icon: any;
  focusedColor?: string;
  unfocusedColor?: string;
}

export const tabsConfig: TabConfig[] = [
  {
    name: 'index',
    route: '/(tabs)',
    title: 'Home',
    icon: HomeIcon,
    focusedColor: 'text-typography-900',
    unfocusedColor: 'text-typography-500',
  },
  {
    name: 'contact',
    route: '/(tabs)/contact',
    title: 'Contact',
    icon: PhoneIcon,
    focusedColor: 'text-typography-900',
    unfocusedColor: 'text-typography-500',
  },
  {
    name: 'about',
    route: '/(tabs)/about',
    title: 'About',
    icon: InfoIcon,
    focusedColor: 'text-typography-900',
    unfocusedColor: 'text-typography-500',
  },
  {
    name: 'profile',
    route: '/(tabs)/profile',
    title: 'Profile',
    icon: UserIcon,
    focusedColor: 'text-typography-900',
    unfocusedColor: 'text-typography-500',
  },
];
