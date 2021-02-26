import { Component } from "react";
import {Container,Row,Col} from 'react-bootstrap'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import {Route} from 'react-router-dom';
class Body extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Route path='/' exact component={Home} />
                        <Route path='/register' component={Register} />  
                        <Route path='/login' component={Login} /> 
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Body;