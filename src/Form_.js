import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

class Form_ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie:{
                imdbId:'',
                rating: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.value);
    };

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Col>
                            <Form.Control type={"text"} placeholder={"ImdbId"} name={"imdbId"}
                                          value={this.state.movie.imdbId} onChange={this.handleSubmit}/>
                        </Col>
                        <Col>
                            <Form.Control type={"text"} placeholder={"rating"}/>
                        </Col>
                        <Col>
                            <Form.Control type={"text"} placeholder={"votes"}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type={"text"} placeholder={"Title"}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type={"number"} placeholder={"Primary Title"}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type={"number"} placeholder={"Original Title"}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control type={"number"} placeholder={"Year"}/>
                        </Col>
                        <Col>
                            <Form.Control type={"number"} placeholder={"Time"}/>
                        </Col>
                        <Col>
                            <Form.Control type={"text"} placeholder={"Movie type"}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Button className="accept" type="submit" variant={"primary"}>Submit</Button>
                    </Form.Row>

                </Form>

            </Container>
        );
    }
}

export default Form_;
