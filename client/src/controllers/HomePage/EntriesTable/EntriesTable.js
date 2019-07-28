import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './EntriesTable.css';

class EntriesTable extends Component {

    render() {
        return <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.entries.map((entry) => {
                        return (
                            <TableRow key={entry._id}>
                                <TableCell component="th" scope="row">{entry.firstName}</TableCell>
                                <TableCell component="th" scope="row">{entry.lastName}</TableCell>
                                <TableCell component="th" scope="row">{entry.phoneNumber}</TableCell>
                                <TableCell component="th" scope="row"><a
                                    href={`/edit-entry/${entry._id}`}>edit</a></TableCell>
                            </TableRow>
                        )
                    })
                    }
                </TableBody>
            </Table>
        </Paper>
    }
}

export default EntriesTable;
