import React, { Component } from 'react'
import FlightService from '../services/FlightService';
class ListFlightComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                flights: []
        }
        this.addFlight = this.addFlight.bind(this);
        this.editFlight = this.editFlight.bind(this);
        this.deleteFlight = this.deleteFlight.bind(this);
    }
    componentDidMount(){
        FlightService.getFlights().then((res) => {
            this.setState({flights: res.data});
        });
    }
    deleteFlight(id){
        FlightService.deleteFlight(id).then( res => {
            this.setState({flights: this.state.flights.filter(flight => flight.id !== id)});
        });
    }
    viewflight(id){
        this.props.history.push(`/view-flight/${id}`);
    }
    editFlight(id){
        this.props.history.push(`/add-flight/${id}`);
    }

   

    addFlight(){
        this.props.history.push('/add-flight/_add');
    }

    render() {
        return (
            <div>
                   
                 <h2 className="text-center">Flights List</h2>
                 <div>
                    <button className="btn btn-primary" onClick={this.addFlight}> Add Flight</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th> Flight Arrival Time</th>
                                    <th> Flight Departure Time</th>
                                    <th> Destination</th>
                                    <th> Flight Gate No</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.flights.map(
                                        flight => 
                                        <tr key = {flight.id}>
                                            <td> {flight.id }</td> 
                                             <td> {flight.arrival_time} </td>   
                                             <td> {flight.departure_time}</td>
                                             <td> {flight.destination} </td>
                                             <td> {flight.gateNo}</td>
                                             <td>
                                                 <button onClick={ () => this.editFlight(flight.id)} className="btn btn-info">Update</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFlight(flight.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewflight(flight.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListFlightComponent