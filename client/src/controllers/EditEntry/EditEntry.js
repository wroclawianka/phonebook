import React, {Component} from 'react';
import axios from 'axios';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './EditEntry.css'
import api from "../../api.json"
import findInvalidValues from "../../invalidValues"
import {Typography} from "@material-ui/core";

class EditEntry extends Component {
    constructor() {
        super();
        this.state = {
            alert: ""
        }
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        axios.get(api.url + `/get/entry/${params.id}`)
            .then(({data: res}) => this.setState({...res.data}))
            .catch((err) => console.error(err))
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
            this.updateEntry()
        }
    };

    updateEntry = () => {
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber
        };
        const id = this.state._id;
        axios.post(api.url + `/patch/entry/${id}`, body)
            .then(() => {
                this.setState({
                    alert: "Entry added"
                })
            })
            .catch((err) => console.error(err))
    };

    render() {
        return <form className="editEntry" noValidate autoComplete="off">
            <TextField
                required
                id="standard-required"
                label="First Name"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
            />
            <TextField
                required
                id="standard-required"
                label="Last Name"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
            />
            <TextField
                required
                id="standard-required"
                label="Phone number"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                helperText="Example: +32 36 258741"
            />
            <br/>
            <Button variant="contained" onClick={this.handleSubmit} color="primary">Edit Entry</Button>
            <br/>
            <Typography className="alert" variant="caption">{this.state.alert}</Typography>
        </form>
    }
}

export default EditEntry;
