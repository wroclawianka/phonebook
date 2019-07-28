import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'typeface-roboto';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HomePage from './HomePage/HomePage.js'
import AddEntry from './AddEntry/AddEntry'
import EditEntry from './EditEntry/EditEntry'

class App extends Component {
    render() {
        return <Box component="div">
            <Typography variant="h3">
                <a className="homepage-link" href="/">Phonebook</a>
            </Typography>
            <Router>
                <Route exact path='/' component={HomePage}/>
                <Route path='/add-entry' component={AddEntry}/>
                <Route path='/edit-entry/:id' component={EditEntry}/>
            </Router>
        </Box>
    }
}

export default App;
