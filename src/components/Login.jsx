import React from "react";
import { Button,Form,FormGroup,Label,Input } from "reactstrap";
import './Login.css' 
import FlightService from "../services/FlightService";
import { Redirect } from "react-router-dom";


class Login extends React.Component{
    constructor(props){
      // const token=localStorage.getItem('token')
      let authorized=false;
     
        super(props)
        this.state={
            id:this.props.match.params.id , 
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
      // console.log(this.state.username)
      // console.log(this.state.password)
      if (this.state.username==="admin")
      
      {
        let loginData={username:this.state.username,password:this.state.password}
        FlightService.getUserByUsername(loginData).then(res=>{
          console.log(res)
          console.log("----------admin---------")
            this.setState({authorized:true})
            
            localStorage.setItem('token',Date.now())
          
            this.props.history.push('/flights')
        })
      }  
    
      
        else{
          console.log("----------Invalid User---------")
          this.setState({authorized:false})
        let loginData={username:this.state.username,password:this.state.password}
        FlightService.getLogin(loginData).then(res=>{
        //console.log(res)
        
        
          localStorage.setItem(`${this.state.username}`,Date.now());
          alert("Invalid Credentials!!");
          this.props.history.push(`/`);
        
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



