import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'typeface-roboto';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HomePage from './HomePage/HomePage.js'
import AddEntry from './AddEntry/AddEntry'
import EditEntry from './EditEntry/EditEntry'

class App extends Component {
    render() {
        return <Container maxWidth="md">
            <Typography variant="h3" className="app-name">
                <a href="/">Phonebook</a>
            </Typography>
            <Router>
                <Route exact path='/' component={HomePage}/>
                <Route path='/add-entry' component={AddEntry}/>
                <Route path='/edit-entry/:id' component={EditEntry}/>
            </Router>
        </Container>
    }
}

export default App;
