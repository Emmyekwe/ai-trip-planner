import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip'
import Header from './components/custom/Header'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripId]'
import MyTrips from './my-trips'

const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/create-trip',
      element: <CreateTrip />,
    },
    {
      path: '/view-trip/:tripId',
      element: <ViewTrip />,
    },
    {
      path: '/my-trips',
      element: <MyTrips />,
    }
  ],
  {
    future: {
      v7_partialHydration: true,            // Partial hydration for improved SSR/CSR
      v7_skipActionErrorRevalidation: true, // Skips revalidation after 4xx/5xx errors
      v7_relativeSplatPath: true,           // Adjust relative splat path behavior
      v7_startTransition: true,             // Wraps state updates with React.startTransition
      v7_fetcherPersist: true,              // Updates fetcher persistence behavior
      v7_normalizeFormMethod: true,         // Normalizes formMethod to uppercase
    },
  }
);

console.log(clientId);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider client_id={clientId}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
