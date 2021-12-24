
const FLIGHT_API_BASE_URL = "http://localhost:8080/api/v1/flights";
const LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/login";

class FlightService {

    adminLogin(login){
        return axios.post(LOGIN_API_BASE_URL,login)
    }

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