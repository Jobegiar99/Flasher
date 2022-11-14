import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainForum from "./Components/MainForum/js/mainForum";
import SubForum from "./Components/SubForum/js/subForum";
import CreatePost from "./Components/CreatePost/createPost.js";
import CreateSubForum from "./Components/CreateSubForum/createSubForum";
import RemoveFromPage from "./Components/RemoveFromPage/removeFromPage";
import Header from "./Components/Header";
import PostView from "./Components/PostView/postView";
import LoginRegister from "./Components/LoginRegister/loginRegister";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/login">
            <LoginRegister />
          </Route>
          <Route path="/post/:postId">
            <PostView />
          </Route>
          <Route path="/removeSubForum/:forumId">
            <RemoveFromPage />
          </Route>
          <Route path="/remove">
            <RemoveFromPage />
          </Route>
          <Route path="/createSubForum">
            <CreateSubForum />
          </Route>
          <Route path="/createPost">
            <CreatePost />
          </Route>
          <Route path="/subforum/:forumId">
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
