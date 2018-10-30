import React from "react";
import HomeScreen from './components/HomeScreen/HomeScreenContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Registration = () => <h2>Registration</h2>;



const AppRouter = () => (
    <Router>
        <div>
            <Route path = "/" exact component={HomeScreen}/>
            <Route path = "/Registration" exact component={Registration}/>
        </div>
    </Router>
)

export default AppRouter;
