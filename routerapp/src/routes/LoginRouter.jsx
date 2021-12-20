import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';

const LoginRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginScreen}/>
            </Switch>
        </Router>
    )
}

export default LoginRouter
