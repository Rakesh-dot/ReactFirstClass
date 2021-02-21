import { Component } from "react";
import Map from './Map';
import Gallery from "./Gallery";
import Copyright from "./Copyright";

class Footer extends Component{
    render(){
        return(
            // <div>
            //     <Map></Map>
            //     <Gallery></Gallery>
            //     <Copyright></Copyright>
            // </div>
            <footer class="py-5 bg-dark">
                <div class="container">
                <p class="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
                </div>
            </footer>
            
        )
    }
}

export default Footer;