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

The `spacex.js` file contains functions for interacting with the SpaceX API.

#### Functions

##### `getLatestLaunches()`

- Description: Fetches data about the latest SpaceX launches.
- Returns: A promise that resolves to the fetched data.

### `launchList.js` (Component)

#### Purpose

The `launchList.js` file contains the LaunchList component for displaying SpaceX launches.

#### Props

- `launches` (Array): An array of SpaceX launch data.
  - `name` (String): The name of the launch.
  - `details` (String): Details about the launch.
  - `date` (String): The date of the launch.

#### Component Logic

- Fetches and displays SpaceX launch data.
- Filters and sorts the data based on user preferences.
- Handles user interactions.

#### Features
- Search Launches: Use the search bar to search for specific SpaceX launches by name. The application will display matching results in real-time.
  - SearchBox
  The SearchBox component is a reusable search bar that allows users to search for SpaceX launches by rocket name. It provides real-time search functionality by updating the results as the user types.

- Categorize Launches: SpaceX launches are categorized into three sections:

  -  Successful Launches: Displays launches that were successful.
  - Failed Launches: Displays launches that were not successful.
  - Future Launches: Displays launches that are scheduled for the future.
  - Launch Details: View detailed information about each launch, including rocket name, flight number, launch date, launch status (success or failure), and launch details.

# SpaceX
