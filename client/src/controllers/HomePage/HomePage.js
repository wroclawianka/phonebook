import React, {Component} from 'react';
import axios from 'axios';
import api from "../../api.json"

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            searchedValue: ""
        };
    }

    getEntries = (event) => {
        const params = {value: event.target.value};
        axios.get(api.url + 'get/entry', {params})
            .then((res) => {this.setState({entries: res.data.entries})})
            .catch(err => console.error(err));
    };


    render() {
        return <div>
            <input className="form-control"
                   type="text"
                   name="searchedValue"
                   onChange={this.getEntries}/>
        </div>
    }
}

export default HomePage;
