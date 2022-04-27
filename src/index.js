import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import config from './aws-exports'
import Amplify from 'aws-amplify'


//Check if you are in localhost or production
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.

    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.

    window.location.hostname.match(
      /^127(?:.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)
const signInURI = config.oauth.redirectSignIn.split(',')
const signOutURI = config.oauth.redirectSignOut.split(',')

if (isLocalhost) {
  config.oauth.redirectSignIn = signInURI[0]
  config.oauth.redirectSignOut = signOutURI[0]
} else if (window.location.hostname === 'https://master.dl8w3lv9qt0gs.amplifyapp.com/' // Add Your Application Domain here. For Example:
  // https://{env}.{appID}.amplifyapp.com/
) {
  config.oauth.redirectSignIn = signInURI[1]
  config.oauth.redirectSignOut = signOutURI[1]
} else {
  console.alert('This is not possible')

}
//Check if you are in localhost or production
//Then Configure Resources
Amplify.configure(config)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
