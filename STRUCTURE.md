# Project Structure

This is a production-grade Expo React Native application built with Gluestack UI v3, Zustand for state management, and NativeWind for styling.

## Folder Structure

```
clion/
├── app/                    # Expo Router app directory
│   ├── _layout.tsx        # Root layout with theme provider
│   └── index.tsx          # Home screen
│
├── components/            # Reusable components
│   ├── app-bar/          # AppBar component with theme toggle
│   └── ui/               # Gluestack UI components
│
├── screens/              # Screen components
│   └── home/            # Home screen example
│
├── store/               # Zustand stores
│   └── theme-store.ts   # Theme management store
│
├── api/                 # API client and functions
│   ├── client.ts        # API client with error handling
│   └── index.ts         # API exports
│
├── utils/               # Utility functions
│   ├── constants.ts     # App constants
│   ├── helpers.ts       # Helper functions
│   ├── logger.ts        # Logger utility
│   └── index.ts         # Utility exports
│
├── types/               # TypeScript type definitions
│   └── index.ts         # Common types
│
└── assets/              # Static assets
```

## Key Features

### 1. Theme Management
- Zustand store for theme state management
- Light/Dark mode switching
- Persistent theme preference using AsyncStorage
- System theme detection support

### 2. AppBar Component
- Customizable AppBar with essential icons
- Theme toggle button
- Search and notification icons
- Responsive design with safe area handling

### 3. API Client
- Centralized API client with error handling
- Request timeout support
- Type-safe API responses
- Easy to extend with new endpoints

### 4. Utilities
- Helper functions (date formatting, validation, etc.)
- Logger utility for development and production
- Constants for app-wide configuration

## Usage

### Theme Store
```typescript
import { useThemeStore } from '@/store/theme-store';

const { mode, setMode, toggleTheme } = useThemeStore();
```

### AppBar Component
```typescript
import { AppBar } from '@/components/app-bar';

<AppBar 
  title="My App"
  showSearch={true}
  showNotifications={true}
  onSearchPress={() => {}}
  onNotificationPress={() => {}}
/>
```

### API Client
```typescript
import { apiClient } from '@/api';

const response = await apiClient.get('/endpoint');
const data = await apiClient.post('/endpoint', { data });
```

## Icons

The project uses custom SVG icons from Gluestack UI. Essential icons available:
- MenuIcon
- SearchIcon
- BellIcon
- SunIcon / MoonIcon
- And many more in `components/ui/icon/index.tsx`

## Styling

- NativeWind (Tailwind CSS for React Native)
- Gluestack UI v3 design system
- Theme-aware styling with CSS variables
- Responsive design patterns

## State Management

- Zustand for global state
- AsyncStorage for persistence
- Type-safe stores with TypeScript

## Development

```bash
# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## Production Ready

- TypeScript for type safety
- Error handling in API client
- Logger utility for debugging
- Organized folder structure
- Reusable components
- Theme persistence
- Safe area handling


