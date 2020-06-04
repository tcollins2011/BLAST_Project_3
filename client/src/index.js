import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import config from "./auth_config.json";
import { Auth0Provider } from "./react-auth0-spa";
import history from "./utils/history";
import "./index.css"

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

