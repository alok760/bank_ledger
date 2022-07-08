import 'axios';
import axios from 'axios';

// This component retrieves data the API
async function getData() {
    const url = 'http://localhost:5000/'; //API URL
    var response;
    try{
        response = await axios.get(url);
        response = response.data;
    } catch(e) {
        // backfall read data from publically served complicated_ledger
        response = await axios.get("/complicated_ledger.json")
    }
    return response.data;
}

export default getData;