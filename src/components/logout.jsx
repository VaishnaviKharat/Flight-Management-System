import React from "react";
import FlightService from "../services/FlightService";

export class Logout extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            username:""
        }
        console.log(this.state.username)
        if(this.state.username==='admin'){
            
        localStorage.removeItem('token')
        }else{
            FlightService.getFlightById(this.state.id).then(res=>{
                console.log(res.data)
                console.log(localStorage)
               localStorage.removeItem(res.data.username)
            })
        }
    }
    
   
  
    click(){
        this.props.history.push("/")
    }

    render(){
        return (
            <div className="container text-center">
                <h1>You have been logged out </h1>
                <br />
                <br />
                <div>
                
                </div>
                     <button className="btn-lg btn-dark btn-block text-center" onClick={this.click.bind(this)}>Login</button>
                </div>
        )
    }
}

export default Logout