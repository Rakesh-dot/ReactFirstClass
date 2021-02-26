import {Component} from 'react';
import {Route} from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <div>
                <a href="/">Home</a>
                <a href="/register">REGISTER</a>
                <a href="/login">LOGIN</a>
            </div>
        )
    }
}

export default Header
