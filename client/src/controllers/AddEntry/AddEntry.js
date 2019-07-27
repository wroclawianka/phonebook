import React, {Component} from 'react';

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
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

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
