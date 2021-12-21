import axios from 'axios';
const FLIGHT_API_BASE_URL = "http://localhost:8080/api/v1/flights";

class FlightService {
    getFlights(){
        return axios.get(FLIGHT_API_BASE_URL);
    }
}

export default new FlightService()