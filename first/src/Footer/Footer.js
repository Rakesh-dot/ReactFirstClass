import { Component } from "react";
import Map from './Map';
import Gallery from "./Gallery";
import Copyright from "./Copyright";

class Footer extends Component{
    render(){
        return(
            <div>
                <Map></Map>
                <Gallery></Gallery>
                <Copyright></Copyright>
            </div>
            
        )
    }
}

export default Footer;