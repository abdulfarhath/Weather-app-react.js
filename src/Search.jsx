import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';

export default function Search({ updateweatherInfo }) {
    const [city, setCity] = useState("");
    const [error, seterr] = useState(false);

    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = "759ae191ab92d7aa0f2df6096e89c597";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            let jsnrsp = await response.json();
            // console.log(jsnrsp);
            let result = {
                city: city,
                temp: jsnrsp.main.temp,
                tempMin: jsnrsp.main.temp_min,
                tempMax: jsnrsp.main.temp_max,
                humididy: jsnrsp.main.humidity,
                feelslike: jsnrsp.main.feels_like,
                weather: jsnrsp.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

        // updateinfo(result);
    }
    const handleChange = (evt) => {
        setCity(evt.target.value);
    }
    const handleSubmit = async (evt) => {
        try{
        seterr(false);
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeatherInfo();
        updateweatherInfo(newinfo);
        }catch(err){
            seterr(true);
        }
    }
    return (
        <div className='searchBox'>
            <h1 style={{color : "rgb(4, 85, 165)"}}>Search for Weather Anywhere</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" onChange={handleChange} label="City" variant="outlined" required value={city} />
                <br />
                <br />
                <Button size="large" type="submit" variant="contained">Search</Button>
            </form>
            { error && <h2 style={{color : "red"}} >No such place found!!</h2> }
        </div>
    );
}