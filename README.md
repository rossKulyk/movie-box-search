# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

PWA is a Progressive App with added functionality to make the experience more immersive on mobile devices. PWAs rely on HTML and JS. Three things required of an app to qualify as a PWA:

-   must run under HTTPS
-   must serve a Web App Manifest
-   must use Service Workers

PWAs work full screen to make the user experience immersive, can be installed and accessed from the home screen just like a native app. Furthermore, PWAs can save the state
from session to session and even access your device’s hardware capabilities, so they can do things like track your location, access your health data, or use a camera.
Since they’re just web apps at the end of the day, PWAs can leverage all of the benefits of the web platform, while still getting access to some of the native features through mobile devices’ browser capabilities (via Service Workers).

Service workers may make them feel like native apps, but PWAs are still effectively websites under the hood, and that means they are:

-   Shareable — This may be more or less useful depending on your app, but in theory, a user should be able to take the URL of the page they are on and share it with a friend, or access that same URL on another device and get the same page.
-   Installation Optional — Users can simply use your app as a website if they choose not to install it. In other words, no more awkwardly asking users to install your app. They can, if they want, but they can still use your app. Again, many people are already using PWAs without knowing it.
-   SEO Relevant — Being a web page at heart means that search engines can crawl your progressive web app (the publicly facing parts, at least). Suddenly, your solution becomes searchable.

Difference between a PWA and a Native App. Pros and cons:
Pros:

-   an experience that is indistinguishable from native mobile products
-   an untethered existence, free from app stores or lengthy downloads and updates
-   a unified in-app experience accessible across all devices
-   a simplified development process that can take between 50 and 75 percent less time than a traditional native mobile development process

Cons:

-   being especially hard on a device’s battery
-   lack of features
-   hardware integration problems
