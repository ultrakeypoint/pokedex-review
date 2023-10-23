import { getMin } from '@/utils/common';
import { QueryClient } from '@tanstack/react-query';

const msCacheTime = getMin(5);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: msCacheTime,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export default queryClient;
