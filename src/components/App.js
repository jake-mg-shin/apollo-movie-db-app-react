import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
// import Nav from '../components/Nav';
import Home from '../routes/Home';
import About from '../routes/About';
import Detail from '../routes/Detail';

export default () => {
    return (
        <Router>
            {/* <Nav /> */}
            <Switch>
                <Route exact path='/movie/:id' component={Detail} />
                <Route exact path='/about' component={About} />
                <Route exact path='/' component={Home} />
                <Redirect from='*' to='/' />
            </Switch>
        </Router>
    );
};
