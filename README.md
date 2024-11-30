# Getting Started with JessePiccione-Info-Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and extended with additional configurations for server-side rendering and deployment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the production mode.  
The server starts using the bundled server file. Make sure to build the server before running this script.

### `npm run start-dev`

Runs the app in the development mode.  
This script builds the server and starts it with development settings.  

### `npm run build`

Installs production dependencies. This prepares the project for deployment.

### `npm run build-server`

Builds the React app and bundles the server for production.  
The React app will be stored in the `build` folder, while the server will be bundled based on the Webpack configuration.

### `npm run clear`

Removes `node_modules` and `package-lock.json` to ensure a clean install environment.

### `npm run deploy`

Automates the deployment process by:
1. Installing development dependencies.
2. Building the server.
3. Installing production dependencies.
4. Initializing Google Cloud settings.
5. Deploying the app to Google Cloud.

### `npm run install-prod`

Installs production dependencies with detailed logging for troubleshooting.

### `npm run install-dev`

Installs development dependencies with detailed logging for troubleshooting.

## Learn More

### Deployment

This project is set up to be deployed on **Google Cloud**.  
For detailed instructions on deploying Create React App projects, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/deployment).

### Server-Side Rendering

The app uses **Express** for server-side rendering. Ensure the server is built before running in production mode.  

### Technologies Used

- **React**: For building the frontend user interface.
- **Express**: For serving the app and enabling server-side rendering.
- **Three.js** and **Vanta.js**: For stunning visual effects.
- **React Router DOM**: For managing client-side routing.

To learn more about React, visit the [React documentation](https://reactjs.org/).
