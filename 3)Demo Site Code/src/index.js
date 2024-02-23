import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

// Creating a root for concurrent mode using React's createRoot function
const root = createRoot(document.getElementById('root'));

// Rendering the App component wrapped in Auth0Provider for authentication
root.render(
  <Auth0Provider
    domain="jaysite.us.auth0.com"
    clientId="AVLmhHYAlnrpwCaYWfvOc3anmbT66hF2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* Rendering the main App component within the Auth0Provider context */}
    <App />
  </Auth0Provider>,
);
