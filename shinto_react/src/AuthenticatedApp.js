import React from 'react';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import {Box} from 'theme-ui';

import UserDashboard from './pages/UserDashboard';
import Navbar from './components/Navbar';
import { checkPropTypes } from 'prop-types';




function App(props){
    console.log(props)
    return(
        <Router>
            <Box width="100vw" height="100vh">
                <Navbar/>
                <Switch>
                    <Route path="/">
                        <UserDashboard user={props.user}/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </Box>
        </Router>
    );
}

export default App;