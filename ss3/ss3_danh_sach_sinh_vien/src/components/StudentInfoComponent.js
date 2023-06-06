import React, {Component} from "react";

export class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    id: 1,
                    name: 'Nguyen Van A',
                    address: 'Ha Noi'
                },
                {
                    id: 2,
                    name: 'Nguyen Van B',
                    address: 'Da Nang'
                }
            ]
        }
    }

    render() {
        return (
            <>
                <table border={1}>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                    {
                        this.state.studentList.map((student, id) =>(
                            <tr key={id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                            </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </>
        );
    }

}