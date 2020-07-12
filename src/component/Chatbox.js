import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


class Chatbox extends Component {
    
    render() {
        return (
            <div>
                <h2 className="mb-5"> <i class="fas fa-user grad-blue"></i> New Team</h2>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Team</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Primary Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Country</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Select Country...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Password</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>
                </Form>
                
            </div>
        );
    }
}

export default Chatbox;