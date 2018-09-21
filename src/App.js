import React, { Component } from 'react';
import Contact from './Screens/Contact';
import Contacts from './Screens/Contacts';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
render() {

return (

<Switch>
    <Route path="/" exact component={Contact} />                              
    <Route path="/contacts" component={Contacts} />
</Switch>
        )
    }
};

export default App; 
