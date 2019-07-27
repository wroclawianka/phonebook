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

    render() {
        return <div>
            <form>
                <input type="text" name="firstName" value={this.state.firstName}/>
                <br/>
                <input type="text" name="lastName" value={this.state.lastName}/>
                <br/>
                <input type="text" name="phoneNumber" value={this.state.phoneNumber}/>
                <br/>
                <br/>
                <input type="submit" value="Edit entry"/>
            </form>
        </div>
    }
}

export default EditEntry;
