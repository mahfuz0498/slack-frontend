import React, { useRef } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Loader from "./components/Loader";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

function App() {
  const [user, loading] = useAuthState(auth);
  const appRef = useRef(null);
  if (loading) {
    return <Loader />;
  }

  return (
    <AppContainer ref={appRef} className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            {/* <Sidebar /> */}
            <AppBody>
              <Sidebar appRef={appRef} className="app__sidebar" />

              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  Sidebar {
    background: red;
    color: green;
  }
`;

const AppBody = styled.div`
  position: relative;
  display: flex;
  height: calc(100vh - 50px);
  /* width: 100vw; */
`;
