import React from 'react';
import './App.css';
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/global.css';

function App() {
    return (
        <div className="App">
            {/* HEADER */}
            <Router>

                <Switch>
                    <Route path="/chat/:person">
                        <Header backButton="/" />
                        <ChatScreen /> {/* individual chat */}

                    </Route>
                    <Route path="/chat">

                        <Header backButton="/" />
                        <Chats />

                    </Route>
                    <Route path="/">

                        <Header />
                        <TinderCards></TinderCards>
                        <SwipeButtons></SwipeButtons>

                    </Route>
                </Switch>

            </Router>

        </div>
    );
}

export default App;
