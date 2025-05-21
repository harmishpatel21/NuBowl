import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { mockApiHandlers } from "./mockApi";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Check if this is an API call that we have a mock handler for
  if (url.startsWith('/api/') && url in mockApiHandlers) {
    console.log(`Using mock handler for ${url}`);
    try {
      // Call the mock handler with the data
      const mockResponse = await mockApiHandlers[url as keyof typeof mockApiHandlers](data as any);
      
      // Create a Response object to match the original function's return type
      const responseBody = JSON.stringify(mockResponse);
      const response = new Response(responseBody, {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
      return response;
    } catch (error) {
      console.error('Mock API error:', error);
      throw new Error(`Mock API error: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  
  // For any other requests, use the original fetch implementation
  // This is kept for backward compatibility, but in a frontend-only app
  // you might want to handle or block these differently
  console.warn(`Making real fetch request to ${url} - this might fail without a server`);
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const url = queryKey[0] as string;
    
    // Check if this is an API call that we have a mock handler for
    if (url.startsWith('/api/') && url in mockApiHandlers) {
      console.log(`Using mock handler for query ${url}`);
      try {
        // Call the mock handler with no data for GET requests
        return await mockApiHandlers[url as keyof typeof mockApiHandlers](undefined);
      } catch (error) {
        console.error('Mock API error in query:', error);
        throw new Error(`Mock API error: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    
    // For non-mocked endpoints, use original implementation
    console.warn(`Making real fetch query to ${url} - this might fail without a server`);
    const res = await fetch(url, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
