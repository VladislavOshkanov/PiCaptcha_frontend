import React from "react";
import HomeScreen from './components/HomeScreen/HomeScreenContainer'
import RegistrationContainer from "./components/RegistrationScreen/RegistrationContainer.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"




const AppRouter = () => (
    <Router>
        <div>
            <Route path = "/" exact component={HomeScreen}/>
            <Route path = "/Registration" exact component={RegistrationContainer}/>
        </div>
    </Router>
)

export default AppRouter;
