import React, {Component} from 'react';
import axios from 'axios';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            searchedValue: ""
        };
    }

    getEntries = (event) => {
        const params = {value: event.target.value};
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
