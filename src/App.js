import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainForum from "./Components/MainForum/js/mainForum";
import SubForum from "./Components/SubForum/js/subForum";
import CreatePost from "./Components/CreatePost/createPost.js";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/subforum">SubForum</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/createPost">
            <CreatePost />
          </Route>
          <Route path="/subforum">
            <SubForum />
          </Route>
          <Route path="/">
            <MainForum />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
