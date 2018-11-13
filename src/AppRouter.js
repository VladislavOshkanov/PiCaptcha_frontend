import React from "react";
import HomeScreenContainer from './components/HomeScreen/HomeScreenContainer'
import RegistrationContainer from "./components/RegistrationScreen/RegistrationContainer.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"




const AppRouter = () => (
    <Router>
        <div>
            <Route path = "/" exact component={HomeScreenContainer}/>
            <Route path = "/Registration" exact component={RegistrationContainer}/>
        </div>
    </Router>
)

export default AppRouter;
