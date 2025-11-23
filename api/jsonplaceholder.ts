
const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Types
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// API Functions
export const jsonPlaceholderApi = {
  // Get all posts
  getPosts: async (): Promise<Post[]> => {
    const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  },

  // Get a single post
  getPost: async (id: number): Promise<Post> => {
    const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return response.json();
  },

  // Get all users
  getUsers: async (): Promise<User[]> => {
    const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  },

  // Get a single user
  getUser: async (id: number): Promise<User> => {
    const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  },

  // Get comments for a post
  getPostComments: async (postId: number): Promise<Comment[]> => {
    const response = await fetch(
      `${JSON_PLACEHOLDER_BASE_URL}/posts/${postId}/comments`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return response.json();
  },

  // Get all comments
  getComments: async (): Promise<Comment[]> => {
    const response = await fetch(`${JSON_PLACEHOLDER_BASE_URL}/comments`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return response.json();
  },
};

