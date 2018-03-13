import React from "react";
console.log('userList component loaded');

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        console.log('UserList.constructor');
    }

    componentWillReceiveProps(nextProps) {
        console.log('UserList.componentWillRecieveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('UserList.shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('UserList.componentWillUpdate', nextProps, nextState);
    }

    componentWillMount() {
        console.log('UserList.componentWillMount');
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <i className="fa fa-table" /> User List </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="dataTable_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4">
                            <div className="row">
                                <div className="col-sm-12"><table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing={0} role="grid" aria-describedby="dataTable_info" style={{ width: '100%' }}>
                                    <thead>
                                        <tr role="row">
                                            <th rowSpan={1} colSpan={1}>User Name</th>
                                            <th rowSpan={1} colSpan={1}>First Name</th>
                                            <th rowSpan={1} colSpan={1}>Last name</th>
                                            <th rowSpan={1} colSpan={1}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th rowSpan={1} colSpan={1}>User Name</th>
                                            <th rowSpan={1} colSpan={1}>First Name</th>
                                            <th rowSpan={1} colSpan={1}>Last name</th>
                                            <th rowSpan={1} colSpan={1}>Actions</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>

                                        {this.props.userList.map((user, index) => (
                                            <tr role="row">
                                                <td className="sorting_1">{user.userName}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td><a href={"/" + user.id} > Update </a> </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    componentDidCatch() {
        console.log('UserList.componentDidCatch');
    }

    componentDidMount() {
        console.log('UserList.componentDidMount');
    }

    componentDidUpdate() {
        console.log('UserList.componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('UserList.componentWillUnmount');
    }
}