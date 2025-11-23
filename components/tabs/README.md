# Tabs Component

A reusable, JSON-driven tabs component for Expo Router.

## Usage

The tabs are automatically generated from the configuration file. Simply modify `config/tabs-config.ts` to customize your tabs.

## Configuration

Edit `config/tabs-config.ts` to add, remove, or modify tabs:

```typescript
export const tabsConfig: TabConfig[] = [
  {
    name: 'index',           // Route name (must match file name)
    route: '/(tabs)',       // Navigation route
    title: 'Home',          // Display name
    icon: HomeIcon,         // Icon component
    focusedColor: 'text-typography-900',    // Active tab color
    unfocusedColor: 'text-typography-500',  // Inactive tab color
  },
  // Add more tabs...
];
```

## Adding a New Tab

1. Create the screen file in `app/(tabs)/your-tab-name.tsx`
2. Add the configuration to `config/tabs-config.ts`
3. Import the icon component if needed
4. The tab will automatically appear!

## Features

- ✅ JSON/TypeScript configuration
- ✅ Automatic tab generation
- ✅ Theme-aware (light/dark mode)
- ✅ Customizable colors per tab
- ✅ No header (headerShown: false)
- ✅ Clean, maintainable code

