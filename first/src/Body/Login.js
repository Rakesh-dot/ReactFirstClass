import axios from 'axios';
import {Component} from 'react';
import {ToastContainer,toast} from 'react-toastify'
class Login extends Component{
    state={
        email:'',
        password:''
    }
    inputHandlerr=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitUser=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:90/user/login',this.state)
        .then((response)=>{
            if(response.data.success===true){
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('type',response.data.usertype);
    
                window.location.href='/'
toast.success("Welcome User")


            }
         else{
            toast.error('Invalid Credentials')
         }


            
           
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <>
            <ToastContainer autoClose={3000} position="top-center"/>
            <form action="action_page.php" method="post">
                <div class="container">
                    <label for="email"><b>Email</b></label>
                    <input type="text"  name="email" value={this.state.email}
                    onChange={this.inputHandlerr} />

                    <label for="psw"><b>Password</b></label>
                    <input type="password"  name="password" value={this.state.password} 
                    onChange={this.inputHandlerr}/>

                    <button onClick={this.submitUser}>Login</button>
                    <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

               
            </form>
            </>
            
        )
    }
}

export default Login;