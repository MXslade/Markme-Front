import React from "react";
import { AuthProvider, PrivateRoute } from "react-auth-kit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import CoursesPage from "./pages/CoursesPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <AuthProvider
      authStorageType={"cookie"}
      authStorageName={"_auth_t"}
      authTimeStorageName={"_auth_time"}
      stateStorageName={"_auth_state"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
      refreshTokenName={"_refresh_t"}
    >
      <Router>
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <PrivateRoute
            component={NewsPage}
            loginPath={"/login"}
            path={["/news", "/", "/main"]}
            exact
          />
          <PrivateRoute
            component={ProfilePage}
            loginPath={"/login"}
            path={["/profile"]}
            exact
          />
          <PrivateRoute
            component={CoursesPage}
            loginPath={"/login"}
            path={"/courses"}
            exact
          />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
