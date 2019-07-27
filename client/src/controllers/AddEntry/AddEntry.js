import React, {Component} from 'react';
import axios from 'axios';
import api from "../../api.json"
import findInvalidValues from "../../invalidValues"

class AddEntry extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let invalidValues = findInvalidValues(this.state);
        if (invalidValues.length) {
            alert(`invalid values: ${invalidValues}`)
        } else {
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber
            };
            this.saveEntry(data);
        }
    };

    saveEntry = (data) => {
        axios.post(api.url + '/post/entry', data)
            .then(() => alert("Entry added"))
            .catch((err) => console.error(err));
    };

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                <br/>
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                <br/>
                <input type="text" name="phoneNumber" placeholder="Phone number" onChange={this.handleChange}/>
                <br/>
                <br/>
                <input type="submit" value="Add entry"/>
            </form>
        </div>
    }
}

export default AddEntry;
