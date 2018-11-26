import React from "react";
import HomeScreenContainer from './components/HomeScreen/HomeScreenContainer'
import RegistrationContainer from "./components/RegistrationScreen/RegistrationContainer.js"
import UserScreenContainer from "./components/UserScreen/UserScreenContainer.js"
import GameSelectionContainer from "./components/GameSelection/GameSelectionContainer";
import GameWithWordContainer from "./components/GameWithWord/GameWithWordContainer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom"




const AppRouter = () => (
    <Router>
        <div>
            <Route path = "/" exact component={HomeScreenContainer}/>
            <Route path = "/Registration" exact component={RegistrationContainer}/>
            <Route path = "/User" exact component={UserScreenContainer}/>
            <Route path = "/GameSelection" exact component = {GameSelectionContainer}/>
            <Route path = "/GameWithWord" exact component = {GameWithWordContainer}/>
        </div>
    </Router>
);

export default AppRouter;
