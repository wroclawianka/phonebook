import React, {Component} from 'react';
import axios from 'axios';
import api from "../../api.json"

class EditEntry extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        axios.get(api.url + `get/entry/${params.id}`)
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
    };


    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                <br/>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                <br/>
                <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}/>
                <br/>
                <br/>
                <input type="submit" value="Edit entry"/>
            </form>
        </div>
    }
}

export default EditEntry;
