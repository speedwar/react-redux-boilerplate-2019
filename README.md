
# React Redux Boilerplate 2019

To be added

## Available Scripts

In the project directory, you can run:

> `npm start`

Runs the app in the development mode.
The page will reload if you make edits.
You will also see any lint errors in the console.

> `npm run dev`

> `npm run test`

Launches the jest test runner

> `npm run test:update`

Update exisiting snapshots
 
> `npm run build`
> `npm run build:prod`


Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Comment

I used `create-react-app3` to start and finish this project quickly without spending too much time for doing Webpack4 configuration.
Migrating reactjs app from SASS to styled-components seems daunting, but with a couple right tooling, it can work very well.
Unbelievably **styled-components** works pretty with React Context API. Now I'm starting to love styled-components!

### Theme

Reaect Context API is used for global theme.
Click **Toggle Theme** button to switch theme between light and dark.

### Unit testing

Used Jest Testing Framework. Simply run `npm test` to test components.
run `npm run test:update` to update snapshots.
Test must be passed to initialise `npm run build`.