import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './router/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ReactQueryDevtools position="bottom" />
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>,
);
