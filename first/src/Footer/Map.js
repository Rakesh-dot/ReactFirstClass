import {Component, component} from "react";
class Map extends Component{
    state={
        "username":"admin",
        "address":"Dillibazar",
        "dob":"1st April"
    }

    changeData=(a, b)=>{
        this.setState({
            "username":a,
            "address":b,
            "dob":"2nd Feb"
        })
    }

    findFriend=(event)=>{
        this.setState({
            "username" : event.target.value
        })
    }

    findAddress=(event)=>{
        this.setState({
            "address":event.target.value
        })
    }
    render(){
        return(
            <div className="mymap">
                <p>{this.state.username}</p>
                <p>{this.state.address}</p>
                <p>{this.state.dob}</p>
                <button onClick={this.changeData.bind(this, "pressure cooker", "gas")}>Click me</button>
                <input type="text" value={this.state.username} onChange={this.findFriend} /><br/>
                <input type="text" value={this.state.address} onChange={this.findAddress} />
            </div>
        )
    }
}

export default Map;