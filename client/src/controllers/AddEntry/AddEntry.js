import React, {Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";
import './AddEntry.css'
import api from "../../api.json"
import findInvalidValues from "../../invalidValues"

class AddEntry extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            alert: ""
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
            this.setState({
                alert: `invalid values: ${invalidValues}`
            })
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
            .then(() => {
                this.setState({
                    alert: `Entry added`
                })
            })
            .catch((err) => console.error(err));
    };

    render() {
        return <form className="addEntry" noValidate autoComplete="off">
            <TextField
                required
                id="standard-required"
                label="First Name"
                margin="normal"
                name="firstName"
                onChange={this.handleChange}
            />
            <TextField
                required
                id="standard-required"
                label="Last Name"
                margin="normal"
                name="lastName"
                onChange={this.handleChange}
            />
            <TextField
                required
                id="standard-required"
                label="Phone number"
                margin="normal"
                name="phoneNumber"
                onChange={this.handleChange}
            />
            <br/>
            <Button variant="contained" onClick={this.handleSubmit} color="primary">Add Entry</Button>
            <br/>
            <Typography className="alert" variant="caption">{this.state.alert}</Typography>
        </form>
    }
}

export default AddEntry;
