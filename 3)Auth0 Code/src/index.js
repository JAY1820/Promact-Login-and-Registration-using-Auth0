// Importing necessary libraries and components
import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

// Creating a root for our React application
const root = createRoot(document.getElementById("root"));

// Rendering our App component within the Auth0Provider
// The Auth0Provider is a wrapper component that handles all the authentication logic
root.render(
  <Auth0Provider
    // Domain and Client ID are specific to your Auth0 application
    domain="jaysite.us.auth0.com"
    clientId="AVLmhHYAlnrpwCaYWfvOc3anmbT66hF2"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* The App component contains the main logic of your application */}
    <App />
  </Auth0Provider>
);
