# SpaceX Launch App

This project is a SpaceX Launch App built using React. It provides information about SpaceX launches and integrates with the SpaceX API.

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
- Filters and sorts the data based on user preferences.
- Handles user interactions.

## Features

### Search Launches
- Use the search bar to search for specific SpaceX launches by name. The application will display matching results in real-time.
  - **SearchBox**: The SearchBox component is a reusable search bar that allows users to search for SpaceX launches by rocket name. It provides real-time search functionality by updating the results as the user types.

### Categorize Launches
- SpaceX launches are categorized into three sections:
  - **Successful Launches**: Displays launches that were successful.
  - **Failed Launches**: Displays launches that were not successful.
  - **Future Launches**: Displays launches that are scheduled for the future.

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

# SpaceX
This project was completed within a maximum timeframe of 48 hours as part of a junior-level position challenge at Digital Turbine.
