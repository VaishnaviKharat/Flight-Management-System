import React, { Component } from 'react'
import FlightService from '../services/FlightService';

class CreateFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,        
            arrival_time: '',
            departure_time: '',
            destination: '',
            gateNo: ''
        }

        this.changeArrivalTimeHandler = this.changeArrivalTimeHandler.bind(this);
        this.changeDepartureTimeHandler = this.changeDepartureTimeHandler.bind(this);
        this.saveOrUpdateFlight = this.saveOrUpdateFlight.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            FlightService.getFlightById(this.state.id).then( (res) =>{
                let flight = res.data;
                this.setState({arrival_time:flight.arrival_time,
                    departure_time: flight.departure_time,
                    destination:flight.destination,
                    gateNo:flight.gateNo          
        
                });
            });      
        }
    }

    saveOrUpdateFlight = (e) => {
        e.preventDefault();
        let flight = {arrival_time: this.state.arrival_time, departure_time: this.state.departure_time,destination:this.state.destination, gateNo: this.state.gateNo};
        console.log('flight => ' + JSON.stringify(flight));

        if(this.state.id === '_add'){
            FlightService.createFlight(flight).then(res =>{

                this.props.history.push('/flights');
    
            });
        }else {
            FlightService.updateFlight(flight,this.state.id).then(res => {
                this.props.history.push('/flights');
            });
        }
       
    }

    changeArrivalTimeHandler= (event) => {
        this.setState({arrival_time: event.target.value});
    }
    
    changeDepartureTimeHandler= (event) => {
        this.setState({departure_time: event.target.value});
    }

    changeDestinationTimeHandler= (event) => {
        this.setState({destination: event.target.value});
    }

    changeGateNoHandler= (event) => {
        this.setState({gateNo: event.target.value});
    }

    cancel(){
        this.props.history.push('/flights');
    
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Flight</h3>
        }else{
            return <h3 className="text-center">Update Flight</h3>
        }
    }


     render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                            
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                        <label> Arrival Time: </label>
                                            <input placeholder="Arrival Time" name="arrival_time" className="form-control" 
                                                value={this.state.arrival_time} onChange={this.changeArrivalTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label> Departure Time: </label>
                                            <input placeholder="Departure Time" name="departure_time" className="form-control" 
                                                value={this.state.departure_time} onChange={this.changeDepartureTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label> Destination </label>
                                            <input placeholder="Destination" name="destination" className="form-control" 
                                                value={this.state.destination} onChange={this.changeDestinationTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gate No </label>
                                            <input placeholder="Gate No" name="GateNo" className="form-control" 
                                                value={this.state.gateNo} onChange={this.changeGateNoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateFlight}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateFlightComponent
