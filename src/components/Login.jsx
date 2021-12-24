import React from "react";
import { Button,Form,FormGroup,Label,Input } from "reactstrap";
import './Login.css' 
import FlightService from "../services/FlightService";
import { Redirect } from "react-router-dom";


class Login extends React.Component{
    constructor(props){
      // const token=localStorage.getItem('token')
      let authorized=false;
      let response="";
     
        super(props)
        this.state={id:this.props.match.params.id , 
            username:"",
            password:"", 
            authorized}
    }

    loginName(event){
      this.setState({username:event.target.value})
    }

    loginPassword(event){
      this.setState({password:event.target.value})
    }

   
    
    login(event){
      event.preventDefault();
      if (this.state.id==="username"){
        let loginData={username:this.state.username,password:this.state.password}
        FlightService.adminLogin(loginData).then(res=>{
          console.log(res.data.data)
          response = res.data
          console.data(response.data)
          if (res.data==='redirect:/flights'){
            this.setState({authorized:true})
            
            // localStorage.setItem('token',Date.now())
            this.props.history.push('/flights')
          }
          else{
            alert("Invalid Credentials!!")      
            this.setState({authorized:false})
            this.props.history.push('/flights')

          }  
        })
      }
      
      else{   
        let loginData={username:this.state.username,password:this.state.password}
        FlightService.getLogin(loginData).then(res=>{
        console.log(res)
        if (res.data===0){
          alert("Invalid Credentials!!");
          this.props.history.push('/login/flights');
        }
        else{
          localStorage.setItem(`${this.state.username}`,Date.now());
          this.props.history.push(`/flights`)
        }
      })
    }}
 
    render(){

        return <Form className="login-form">
                <h1 className="text-center">
                <span className="font-weight-bold ">Login</span>
                </h1>
    
        <FormGroup >
            <Label>Username </Label>
            <Input type="text" placeholder="Username" value={this.state.username} onChange={this.loginName.bind(this)} required />
        </FormGroup>
        <FormGroup >
            <Label>Password</Label>
            <Input type="password" placeholder="Password" value={this.state.password} onChange={this.loginPassword.bind(this)} required />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block text-center" onClick={this.login.bind(this)}>Login</Button>  
        </Form>
    }
}

export default Login


