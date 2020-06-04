import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class BreadcrumbNav extends Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Websites
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>New Team</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default BreadcrumbNav;