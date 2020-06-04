import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
<<<<<<< HEAD
import Blast from "./pages/blast";
=======
import Blast from "./pages/blast"
import Explanation from "./pages/explanation"
>>>>>>> 94621b3f77aa8ff0300234f83343d6a9ed049f89
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import history from "./utils/history";
// import { useAuth0 } from "./react-auth0-spa";
import "./components/NavBar/style.css";
function App() {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blast" component={Blast} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path ="/explanation" component={Explanation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
