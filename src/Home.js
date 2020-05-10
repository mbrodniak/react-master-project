
import React from 'react';
import App from "./App";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';


class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }
     componentDidMount() {
        console.log('Home');
    }

    handleClick(){
        this.setState({
            clicked: true
        })
    }

    render() {
        if(this.state.clicked){
            return (<Redirect to={'/test'}/>);
        }
        return (
            <div>
                <p>Home</p>
                <button type={'button'} onClick={this.handleClick.bind(this)}>Start</button>
            </div>
        );
    }

}
export default Home;
