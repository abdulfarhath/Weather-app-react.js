import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Info.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';

export default function Info({ info }) {
    let init_img = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    let hot_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RHaQf5H7QjEdld0Zjq0wO8uRW1VY0_FJkg&usqp=CAU";
    let cold_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn764W7GF5KSVPZMa_FMmBpw6m4r5YLVstFA&usqp=CAU";
    let rainy_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS851HL8j43CiyhbM14xXLfMcRpn_t2gFvrBg&usqp=CAU";
    let freeze_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJWiiMmXwi5K9YCAZdnww9U0DBUW0HSXvNx-rqcQg4DCQEcOGtv0BHNNr8mT1bZoTAA&usqp=CAU";
    let moderate_img = "https://th.bing.com/th/id/OIP.41KzkiqjHGQOcYfm9py8UwHaDP?w=1200&h=525&rs=1&pid=ImgDetMain";
    const imageSelector = () => {
        if (info.humidity > 60) {
            return rainy_img; // High humidity indicates rain
        } else if (info.temp > 30) {
            return hot_img; // High temperature indicates hot weather
        } else if (info.temp < 0) {
            return freeze_img; // Temperature below freezing indicates extremely cold weather
        } else if (info.temp < 10) {
            return cold_img; // Temperature below 10 but above freezing indicates cold weather
        } else {
            return moderate_img; // Moderate temperature and humidity
        }
        
    }
    const geticn = () =>{
        if (info.humidity > 30) {
            return <ThunderstormIcon></ThunderstormIcon>; // Rainy weather icon
        } else if (info.temp > 30) {
            return <WbSunnyIcon></WbSunnyIcon>; // Hot weather icon
        } else if (info.temp < 10) {
            return <SevereColdIcon></SevereColdIcon>; // Cold weather icon for severe cold
        } else if (info.temp >= 10 && info.temp <= 30) {
            return <AcUnitIcon></AcUnitIcon>; // Cold weather icon for temperatures between 10 and 30
        }
        
    }

    return (
        <div className='Infodiv'>
            <div className="card-container">
                <Card sx={{ maxWidth: 450 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={imageSelector()}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography className='city' gutterBottom variant="h5" component="div">
                            {info.city}  {geticn()}
                        </Typography>
                        <Typography className='weatherinfo' variant="body2" color="text.secondary">
                            <p>Temperature = {info.temp} &deg;C</p>
                            <p>Humidity = {info.humididy}</p>
                            <p>Minimum Temperature = {info.tempMin}&deg;C </p>
                            <p>Maximum Temperature = {info.tempMax}&deg;C </p>
                            <p>weather can be described as <em>{info.weather} </em> and feels like {info.feelslike}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}