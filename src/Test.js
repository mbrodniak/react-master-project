import React from 'react';
import data30 from './response30';
import data200 from './response_3_200';
import data500 from './response_5_500';
import data1000 from './response_2_1000';
import './Form_';
import './App.css';
import {Button, Table, Row, Col, Container} from "react-bootstrap";
import Form_ from "./Form_";


class Test extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            newdata: []
        };
        this.changeData30 = this.changeData30.bind(this);
        this.changeData200 = this.changeData200.bind(this);
        this.changeData500 = this.changeData500.bind(this);
        this.changeData1000 = this.changeData1000.bind(this);

    }
    componentDidMount() {
        // this.newdata = data;
        console.log('Test Mount');

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Test Update");
    }

    changeData30(){
        console.log('Change');
        this.setState({
            newdata: data30
        });
    }
    changeData200(){
        this.setState({
            newdata: data200
        });
    }
    changeData500(){
        this.setState({
            newdata: data500
        });
    }
    changeData1000(){
        this.setState({
            newdata: data1000
        });
    }

    render() {
        let index = 0;
        return (
            <div>
            <Container>
                <Row>
                    <Col>
                        <Button variant='outline-primary' onClick={this.changeData30}>Change</Button>
                    </Col>
                    <Col>
                        <Button variant='outline-success' onClick={this.changeData200}>Change200</Button>
                    </Col>
                    <Col>
                        <Button variant='outline-warning' onClick={this.changeData500}>Change500</Button>
                    </Col>
                    <Col>
                        <Button variant='outline-danger' onClick={this.changeData1000}>Change1000</Button>
                    </Col>
                </Row>
                <Row>
                    <Form_/>
                </Row>
            </Container>
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Imdbid</th>
                                <th>ratings</th>
                                <th>votes</th>
                                <th>title</th>
                                <th>primary title</th>
                                <th>original title</th>
                                <th>start year</th>
                                <th>minutes</th>
                                <th>genere</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.newdata.map(data => (
                                <tr key={index++}>
                                    <td>{index}</td>
                                    <td>{data.imdbId}</td>
                                    <td>{data.ratings}</td>
                                    <td>{data.votesNumber}</td>
                                    <td>{data.titleType}</td>
                                    <td>{data.primaryTitle}</td>
                                    <td>{data.originalTitle}</td>
                                    <td>{data.startYear}</td>
                                    <td>{data.runtimeMinutes}</td>
                                    <td>{data.genere1}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
 export default Test;
