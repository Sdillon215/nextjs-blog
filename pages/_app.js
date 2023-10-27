// * Global css can only be imported in the _app.js file.
// * _app.js wraps the root of the app and passes styles down to all components.

import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }