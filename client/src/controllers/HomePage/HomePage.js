import React, {Component} from 'react';
import axios from 'axios';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            searchedValue: ""
        };
    }

    searchValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        return <div>
            <input className="form-control"
                   type="text"
                   name="searchedValue"
                   onChange={this.searchValue}/>
        </div>
    }
}

export default HomePage;
