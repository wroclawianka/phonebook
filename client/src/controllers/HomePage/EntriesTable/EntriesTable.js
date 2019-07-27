import React, {Component} from 'react';

class EntriesTable extends Component {

    render() {
        return <div>
            <table>
                <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Phone Number</td>
                </tr>
                </thead>
                <tbody>
                {this.props.entries.map((entry) => {
                    return (
                        <tr key={entry._id}>
                            <td>{entry.firstName}</td>
                            <td>{entry.lastName}</td>
                            <td>{entry.phoneNumber}</td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
        </div>

    }
}

export default EntriesTable;
