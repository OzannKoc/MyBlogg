import React, { useState, Children } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignUp from "../Pages/SignUp";
import Navbar from "../Components/Navbar";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const onClickSignUp = () => {
    setIsVisible(true);
  };

  return (
    <div className="Container">
      <Router>
        <Navbar onClickSignUp={onClickSignUp} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/signup"
            component={(props) => {
              return (
                <SignUp
                  visible={isVisible}
                  setIsVisible={setIsVisible}
                  {...props}
                />
              );
            }}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
