import React from 'react';
import logo from './react.png';
import './App.css';
import 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';

import Test from './Test';
import Home from './Home';
class App extends React.Component {

    //
    // const handleClick = () => {
    //    console.log("Click");
    //    useHistory().push('/test');
    // };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         clicked: false
    //     }
    // }
    //
    // handleClick() {
    //     console.log('Clicked!');
    //     this.setState({clicked: true})
    // };

    render() {
        return (
            <div>
                <Router>
                    <Route path="/test" exact component={Test} />
                    <Route path="/home" component={Home}/>
                </Router>
                {/*<div className="App">*/}
                    {/*<header className="App-header">*/}
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                        {/*<button type={"btn btn-primary"}*/}
                                {/*onClick={this.handleClick.bind(this)}>Start*/}
                        {/*</button>*/}
                    {/*</header>*/}
                    {/*/!*<body>*!/*/}
                    {/*/!**!/*/}
                    {/*/!*</body>*!/*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
