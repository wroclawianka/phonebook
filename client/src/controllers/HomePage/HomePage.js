import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import api from "../../api.json"
import EntriesTable from './EntriesTable/EntriesTable';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            entries: []
        };
    }

    getEntries = (event) => {
        const params = {value: event.target.value};
        axios.get(api.url + '/get/entry', {params})
            .then((res) => {this.setState({entries: res.data.entries})})
            .catch(err => console.error(err));
    };


    render() {
        return <div>
            <input className="form-control"
                   type="text"
                   name="searchedValue"
                   onChange={this.getEntries}/>
            <div>
                { this.state.entries.length
                    ? <EntriesTable entries={this.state.entries}/>
                    : <p>Search entries to see results...</p>
                }
            </div>
            <Button variant="contained" href="/add-entry">Add Entry</Button>
        </div>
    }
}

export default HomePage;
