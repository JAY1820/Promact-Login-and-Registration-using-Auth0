import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

/**
 * Main component for the Auth0 Login Site.
 * @returns {JSX.Element} The App component.
 */
function App() {
  // Destructuring authentication-related properties from useAuth0 hook
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  // Nested Navbar component for navigation links
  const Navbar = () => (
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  );

  // Render the main application content
  return (
    <div className="App">
      {/* Include the Navbar component */}
      <Navbar />

      {/* Main content for the homepage */}
      <div className="homepage">
        <h1>Welcome to Auth0 Login Site</h1>
        <h5>This page is for testing Auth0 login and logout functionality.</h5>

        {/* Conditional rendering based on user authentication state */}
        {user ? (
          <>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Login
          </button>
        )}

        {/* Display user information if authenticated */}
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          isAuthenticated && (
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          )
        )}

        {/* Carousel component for displaying images and captions */}
        <Carousel>
          {/* Carousel Item 1 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.postimg.cc/prwgXqcP/photo-1-final.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Microsoft Azure</h1>
              <h4>
                Microsoft Azure is a cloud computing platform and Infrastructure
                as a Service (IaaS) .
              </h4>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Carousel Item 2 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.postimg.cc/MpT2zPDJ/photo-4-final.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>Auth0 </h1>
              <h4>
                Auth0 is an identity management platform that provides
                authentication and authorization services for applications.
              </h4>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Carousel Item 3 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.postimg.cc/wvLmtB0L/photo-3-final.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Microsoft Identity Platform</h1>
              <h4>
                The Microsoft Identity Platform (formerly known as Azure AD B2C)
                is a comprehensive identity and access management solution.
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
