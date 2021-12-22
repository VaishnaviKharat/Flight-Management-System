import axios from 'axios';
const FLIGHT_API_BASE_URL = "http://localhost:8080/api/v1/flights";

class FlightService {
    getFlights(){
        return axios.get(FLIGHT_API_BASE_URL);
    }

    createFlight(Flight){
        return axios.post(FLIGHT_API_BASE_URL,Flight);
    }

    getFlightById(flightId){
        return axios.get(FLIGHT_API_BASE_URL + '/' + flightId);
    }

    updateFlight(flight, flightId){
        return axios.put(FLIGHT_API_BASE_URL + '/' + flightId,flight);
    }

    deleteFlight(flightId){
        return axios.delete(FLIGHT_API_BASE_URL + '/' + flightId);
    }
}

export default new FlightService()