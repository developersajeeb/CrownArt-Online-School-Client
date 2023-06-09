import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router';
import AuthProviders from './providers/AuthProviders';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <ThemeProvider>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
      </ThemeProvider>

    </QueryClientProvider>
  </React.StrictMode>,
)
