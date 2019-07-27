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
        return <div></div>
    }
}

export default EditEntry;
