# Promact-Login-and-Registration-using-Auth0

Login Authentication Using Auth0 and Microsoft Identity

## Description

This repository provides a streamlined implementation of user login and registration functionalities in your application, leveraging the robust capabilities of Auth0 and Microsoft Identity. By integrating these powerful authentication services, you ensure a secure and seamless user experience.

## Key Features

- **Secure Authentication**: Auth0 acts as a centralized authentication platform, handling user login, password management, and token issuance.
- **Flexible Login Options**: Users can authenticate using either their Auth0 credentials or their Microsoft account, providing convenient choices.
- **Enhanced Security**: Microsoft Identity adheres to industry-standard security protocols, safeguarding user data and application integrity.
- **Customization Potential**: The codebase offers a foundation for tailoring the login and registration flow to your specific requirements.

## Prerequisites

- An Auth0 account and application
- A Microsoft Azure subscription
- Familiarity with basic web development concepts

## Configuration

### 1.Auth0

Replace placeholders in src/config.js with your Auth0 domain, client ID, and client secret.

### 2.Microsoft Azure

Create an Azure Active Directory (AAD) application and configure the following settings:

- Redirect URI: Match the value specified in src/config.js
- Supported account types: Select appropriate options (e.g., accounts in any organizational directory)
