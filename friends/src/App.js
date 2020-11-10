import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/api/friends" component={FriendsList} />
        <PrivateRoute exact path="/api/friends/:id" component={Friend} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
