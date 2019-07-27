import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage.js'
import AddEntry from './AddEntry/AddEntry'
import EditEntry from './EditEntry/EditEntry'

class App extends Component {
    render() {
        return <div>
            <h1><a className="homepage-link" href="/">Phonebook</a></h1>
            <Router>
                <Route exact path='/' component={HomePage}/>
                <Route path='/add-entry' component={AddEntry}/>
                <Route path='/edit-entry/:id' component={EditEntry}/>
            </Router>
        </div>
    }
}

export default App;
