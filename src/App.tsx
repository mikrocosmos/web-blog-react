import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reset from "./pages/Reset";
import Works from "./pages/Works";

function App() {
  const [main, setMain] = useState<IMain>();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const mainResponse: IMain = await axios.get(
          "http://localhost:3001/main"
        );
        setMain(mainResponse.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/post">
                <Post />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/reset">
                <Reset />
              </Route>
              <Route path="/works">
                <Works />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
