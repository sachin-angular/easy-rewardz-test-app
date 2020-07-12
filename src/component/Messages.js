import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge'
import user from '../assets/user.png';
import profile from '../assets/profile.png';


class Messages extends Component {

    render() {
        return (
            <div className="w-100 members">
                <div>
                    <div className="flex-container w-100 mb-3 mt-4">
                        <div className="w-100">
                            <h3 className="pull-left ">Members <Badge variant="grad">3</Badge></h3>
                            <Button className="pull-right" variant="success" type="submit">
                                + Add
                            </Button>
                        </div>
                    </div>
                </div>
                <Table   hover>
                    <tbody>
                        <tr>
                            <td className="nameList">
                                <Image src={user} className="pic mr-3" roundedCircle />
                                Adam Whitemans &nbsp;&nbsp;&nbsp; <span>CEO &amp; Founder</span> <small className="admin">ADMIN</small></td>
                            <td> <span class="flag-icon flag-icon-it flag-icon-squared mr-2"></span>Italy </td>
                            <td className="del">
                                <button className="d-none"><i className="fas fa-minus-circle color-red"></i> Make Admin</button>
                                <button><i className="fas fa-minus-circle del-icon"></i> Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="nameList">
                                <Image src={profile} className="pic mr-3" roundedCircle />
                                Nell McCoy &nbsp;&nbsp;&nbsp; <span>Senior Marketing Manager</span> </td>
                            <td>
                                <span class="flag-icon flag-icon-us flag-icon-squared mr-2"></span>
                                United States</td>
                            <td className="del">
                                <button className="icon"><i className="fas fa-user grad-blue"></i> Make Admin</button>
                                <button><i className="fas fa-minus-circle del-icon"></i> Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="nameList">
                                <Image src={user} className="pic mr-3" roundedCircle />
                                Ann Huff &nbsp;&nbsp;&nbsp; <span>CTO e Co-Founder</span></td>
                            <td>
                            <span class="flag-icon flag-icon-de flag-icon-squared mr-2"></span>Germany</td>
                            <td className="del">
                                <button className="icon"><i className="fas fa-user grad-blue"></i> Make Admin</button>
                                <button><i className="fas fa-minus-circle del-icon"></i> Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div className="w-100 d-flex just-end mt-5 mb-5">   
                    <Button className="pull-right" variant="grad" type="submit">
                        Save
                    </Button>
                </div>
            </div>
        );
    }
}

export default Messages;