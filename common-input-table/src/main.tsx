import './index.css';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { appTheme } from './theme';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';

const DEFAULT_QUERY_STALE_TIME_IN_MS = 1000 * 20; // NOTE: 20 seconds
const DEFAULT_QUERY_RETRIES = 0; // NOTE: 1 time
const DEFAULT_QUERY_RETRY_DELAY_IN_MS = 1000; // NOTE: 1 seconds

const QUERY_CLIENT_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: DEFAULT_QUERY_STALE_TIME_IN_MS,
      retry: DEFAULT_QUERY_RETRIES,
      retryDelay: DEFAULT_QUERY_RETRY_DELAY_IN_MS,
    },
  },
};

const queryClient = new QueryClient(QUERY_CLIENT_CONFIG);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={appTheme}>
        <App />
      </MuiThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
