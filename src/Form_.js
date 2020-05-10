import {Container, Row, Col, Form, Button} from 'react-bootstrap'

class Form extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Control type={"text"} placeholder={"text"}/>
                    </Form.Group>
                    <Button variant={"primary"} type={"submit"}>Submit</Button>
                </Form>

            </Container>
        );
    }
}

export default Form;
