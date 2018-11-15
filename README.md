# A website template for Meetup groups

This is a default website I made for our GDG Cloud Vancouver Meetup group.

Demo: https://gdgvancouver-e7a28.firebaseapp.com/

### This application uses the following in Firebase:

- Hosted on Firebase Hosting
- A Firebase Function which fetches your upcoming events. (This keeps your API key from the public in your frontend code)

### Others used:

- Typescript
- React
- Material-UI

### Basic dev setup

cd into the projects directory and run:

`npm install`

'npm build'

`npm install -g firebase-tools`

`firebase login`

`firebase init`

Note: Services to enable in Firebase when running firebase init are:

- Firebase Functions
- Firebase Hosting

Are you ready to proceed?

`y`

Select your project

What do you want to use as your public directory? (public)

`build`

Then hit enter

Configure as a single-page app (rewrite all urls to /index.html)?

`y`

File build/index.html already exists. Overwrite?

`n`

**Important** inside the Firebase Function you will see a environment variable called `functions.config().meetup.key`
To set this environment variable, in the root of this project you must run this command with your Meetup API Key. (You can get your key here https://secure.meetup.com/meetup_api/key/)

`firebase functions:config:set meetup.key="INSERT_YOUR_MEETUP_KEY_HERE"`

To change the Meetup Group events that get displayed, change the "meetupGroupName" to your Meetup name inside the `/functions/index.ts` file

You are now ready to deploy with:

`firebase deploy`

Or if you want to test it locally
**Make sure you run npm run build if you change any code**

`firebase serve`

# Below is the basic documentation for create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
