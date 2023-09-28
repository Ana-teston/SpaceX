# SpaceX Launch App

This project is a SpaceX Launch App built using React and Tailwind CSS. It includes Cypress for component testing, JWT Token for user authentication/authorization, Strapi CMS for content management, and a PostgreSQL database. The app is deployed on both Heroku and Vercel in production and provides comprehensive information about SpaceX launches, integrating seamlessly with the SpaceX API.
## Getting Started

To run the app locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `yarn install` to install dependencies.
4. Run `yarn start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## SpaceX Launch App Documentation

### Introduction

This documentation provides details about the SpaceX Launch App, its components, and the SpaceX API integration.

### Authentication with JWT Tokens

The SpaceX Launch App uses JWT (JSON Web Tokens) for authentication. Users can register, log in, and log out securely. JWT tokens are stored in the client's local storage for authentication.

### Register

To register as a new user, follow these steps:

1. Click on the "Register" link or button.
2. Provide your desired username, email, and password.
3. Click the "Register" button to create a new account.

### Login

To log in, follow these steps:

1. Click on the "Login" link or button.
2. Enter your registered username and password.
3. Click the "Login" button to log in.

Here's an example of the code used for logging in:

```javascript
const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
        const responseData = await fetcher(`process.env.PUBLIC_STRAPI_URL/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: data.identifier,
                password: data.password,
            }),
        });

        if (responseData && responseData.user) {
            setToken(responseData);
            setLoginSuccess(true);
        } else {
            console.error('Invalid responseData:', responseData);
        }
    } catch (error) {
        console.error(error);
    }
};
```

### Logout

- To log out, click on the "Logout" link or button.
- You will be securely logged out, and your JWT token will be invalidated.
- Example helper function into auth.js file to unset token and logout properly:
- ```javascript
  export const unsetToken = () => {
    if (typeof window === "undefined") {
        return;
    }
    Cookies.remove("id");
    Cookies.remove("username");
    Cookies.remove("jwt");

    window.location.reload();
};
``


### `spacex.js` (API File)

#### Purpose

The `spacex.js` file contains function async to interact with the SpaceX API.

#### Functions

##### `fetchSpaceXLaunches()`

- Description: Fetches data about SpaceX launches.
- Returns: A promise that resolves to the fetched data.

### `launchList.js` (Component)

#### Purpose

The `launchList.js` file contains the LaunchList component for displaying SpaceX launches.

#### Props

- `launches` (Array): An array of SpaceX launch data.
    - `name` (String): The name of the rocket launch.
    - `details` (String): Details about the launch.
    - `date` (String): The date of the launch.

#### Component Logic

- Fetches and displays SpaceX launch data.
- Filters and sorts the data based on user preferences by launch name.
- Handles user interactions.

## Features

### Search Launches
- Use the search bar to search for specific SpaceX launches by name. The application will display matching results in real-time.
    - **SearchBox**: The SearchBox component is a reusable search bar that allows users to search for SpaceX launches by rocket name. It provides real-time search functionality by updating the results as the user types.

### Categorize Launches
- SpaceX launches are categorized into three sections:
    - **Successful Launches**: Displays launches that were successful.
    - **Failed Launches**: Displays launches that were not successful.
    
### Launch Details
- View detailed information about each launch, including rocket name, flight number, launch date, launch status (success or failure), and launch rockets details.

## Testing
- Usage Cypress:

  "cypress:open": "./node_modules/.bin/cypress open",
  "cypress:run": "./node_modules/.bin/cypress run",
  "test:ci": "yarn run cypress:run",
  "test:ci:firefox": "yarn run cypress:run -- --browser firefox",
  "test:ci:record": "yarn run cypress:run -- --record"

- Cypress is used for end-to-end testing in this project. Cypress provides a powerful testing framework for your web applications.

- To open the Cypress test runner, run the following command in your project directory:

- Click on a test file to run the tests, and Cypress will open a new browser window to execute the tests / components.

## Deployment

You can deploy this SpaceX Launches App on [Vercel](https://vercel.com/) using your Git repository. Here's how:

1. **Sign Up/Log In to Vercel**:
   If you don't have an account on Vercel, you'll need to sign up. If you already have an account, log in.

2. **Connect Your Git Repository (Optional)**:
   If your project is hosted on a Git repository (like GitHub), you can link it to Vercel for automatic deployments. This step is optional if you prefer manual deployments.

3. **Initialize Your Project**:
   Make sure your project has a `package.json` file and the necessary configurations for building and serving your app.

4. **Login via Vercel CLI (Optional)**:
   If you prefer using the Vercel CLI (Command Line Interface), run the following command to log in:
   ```bash

   vercel login
### Deploying Strapi with Heroku and PostgreSQL

1. **Prepare Your Strapi Application**:
    - Ensure your Strapi app works locally.

2. **Create a Heroku Account**:
    - Sign up for Heroku if needed.

3. **Install Heroku CLI**:
    - Install Heroku CLI on your computer.

4. **Set Up a PostgreSQL Database**:
    - Create a PostgreSQL database on Heroku.

5. **Configure Your Strapi App**:
    - Update `config/database.js` to use `process.env.DATABASE_URL`.

6. **Create a Procfile**:
    - Add a Procfile to specify how Heroku should run your app.

7. **Add a `.gitignore` File**:
    - Exclude sensitive info and `node_modules` in .gitignore.

8. **Commit to Git**:
    - Commit your changes to Git.

9. **Deploy to Heroku**:
    - Use Heroku CLI to deploy:
      ```bash
      heroku create your-app-name
      git push heroku master
      ```

10. **Open Your App**:
    - Access your app via Heroku's domain.

11. **Migrate and Seed Data**:
    - If needed, run migrations and seeding using Heroku CLI.

12. **Set Environment Variables**:
    - Add any required environment variables.

13. **Monitor Logs**:
    - Use Heroku to monitor app logs.
