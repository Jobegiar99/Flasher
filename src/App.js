import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainForum from "./Components/MainForum/js/mainForum";
import SubForum from "./Components/SubForum/js/subForum";
import CreatePost from "./Components/CreatePost/createPost.js";
import CreateSubForum from "./Components/CreateSubForum/createSubForum";
import RemoveFromPage from "./Components/RemoveFromPage/removeFromPage";
import RemovePost from "./Components/RemovePost/removePost";
import Header from "./Components/Header";
import PostView from "./Components/PostView/postView";
import LoginRegister from "./Components/LoginRegister/loginRegister";

import { CreateDocument } from "./js/db/dbFunctions";
import SignUp from "./Components/SignUp/signUp";
export default function App() {
  const [isSignedIn, setIsSignedIn] = useState();
  return (
    <Router>
      <div>
        <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
        <Switch>
          <Route path="/login">
            <LoginRegister
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
            />
          </Route>
          <Route path="/signUp">
            <SignUp isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
          </Route>
          <Route path="/post/:forumId/:postId">
            <PostView />
          </Route>
          <Route path="/removeSubForum/:forumId">
            <RemoveFromPage />
          </Route>
          <Route path="/removePost/:forumId/:postId">
            <RemovePost />
          </Route>
          <Route path="/createSubForum">
            <CreateSubForum />
          </Route>
          <Route path="/createPost/:forumId">
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
