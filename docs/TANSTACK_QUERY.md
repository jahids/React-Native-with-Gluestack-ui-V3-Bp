# TanStack Query Setup

This project uses **TanStack Query (React Query)** for efficient data fetching, caching, and state management.

## Features

✅ **Automatic Caching** - Data is cached for 5 minutes by default  
✅ **Background Refetching** - Automatically refetches stale data  
✅ **Error Handling** - Built-in error states and retry logic  
✅ **Loading States** - Easy loading state management  
✅ **Optimistic Updates** - Support for optimistic UI updates  
✅ **Expo Compatible** - Fully compatible with Expo/React Native  

## Structure

```
lib/
  └── query-client.ts          # QueryClient configuration

components/
  ├── query-provider/          # QueryClientProvider wrapper
  ├── post-list/               # List component for posts
  ├── post-card/               # Individual post card
  ├── loading-state/           # Loading indicator
  └── error-state/            # Error display component

hooks/
  ├── use-posts.ts            # Posts query hook
  ├── use-users.ts            # Users query hook
  └── index.ts                # Hooks exports

api/
  └── jsonplaceholder.ts      # JSONPlaceholder API functions
```

## Usage

### Basic Query Hook

```typescript
import { usePosts } from '@/hooks/use-posts';

function MyComponent() {
  const { data, isLoading, error, refetch } = usePosts();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} />;

  return <PostList posts={data} />;
}
```

### Available Hooks

- `usePosts()` - Fetch all posts
- `usePost(id)` - Fetch single post
- `useUsers()` - Fetch all users
- `useUser(id)` - Fetch single user

### Adding New Queries

1. **Create API function** in `api/jsonplaceholder.ts`:
```typescript
export const jsonPlaceholderApi = {
  getTodos: async (): Promise<Todo[]> => {
    const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/todos`);
    return response.json();
  },
};
```

2. **Create hook** in `hooks/use-todos.ts`:
```typescript
import { useQuery } from '@tanstack/react-query';
import { jsonPlaceholderApi } from '@/api/jsonplaceholder';

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => jsonPlaceholderApi.getTodos(),
    staleTime: 1000 * 60 * 5,
  });
};
```

3. **Use in component**:
```typescript
const { data: todos } = useTodos();
```

## Configuration

Query client is configured in `lib/query-client.ts`:

- **staleTime**: 5 minutes (data considered fresh)
- **gcTime**: 10 minutes (cache retention)
- **retry**: 2 attempts on failure
- **refetchOnWindowFocus**: false (mobile-friendly)

## Caching

TanStack Query automatically caches queries based on `queryKey`:

- `['posts']` - All posts
- `['post', 1]` - Post with ID 1
- `['users']` - All users
- `['user', 1]` - User with ID 1

Cache is shared across components - multiple components using the same query will share the same cached data.

## JSONPlaceholder API

We're using [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a fake REST API:

- **Posts**: `/posts` - 100 posts
- **Users**: `/users` - 10 users
- **Comments**: `/comments` - 500 comments
- **Albums**: `/albums` - 100 albums
- **Photos**: `/photos` - 5000 photos
- **Todos**: `/todos` - 200 todos

## Best Practices

1. **Use query keys consistently** - Follow the pattern `['resource']` or `['resource', id]`
2. **Set appropriate staleTime** - Balance between freshness and performance
3. **Handle loading and error states** - Always provide user feedback
4. **Use refetch for pull-to-refresh** - Implement refresh functionality
5. **Leverage cache** - Don't refetch unnecessarily

## Example: About Page

The About page demonstrates:
- Fetching posts from JSONPlaceholder
- Displaying in a list
- Loading states
- Error handling
- Pull-to-refresh

See `app/(tabs)/about.tsx` for the complete implementation.


