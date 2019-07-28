import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import axios from 'axios';
import api from "../../api.json"
import EntriesTable from './EntriesTable/EntriesTable';
import Typography from "@material-ui/core/Typography";

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
            <TextField
                required
                id="standard-required"
                label="Search box"
                margin="normal"
                name="searchedValue"
                onChange={this.getEntries}
            />
            <div>
                { this.state.entries.length
                    ? <EntriesTable entries={this.state.entries}/>
                    : <Typography variant="caption">Search entries to see results...</Typography>
                }
            </div>
            <Button variant="contained" href="/add-entry">Add Entry</Button>
        </div>
    }
}

export default HomePage;
