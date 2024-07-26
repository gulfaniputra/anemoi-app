import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
        />
        <img
          src={search_icon}
          alt="The search box's icon."
        />
      </div>
      <img
        src={clear_icon}
        alt="A weather icon."
        className="weather-icon"
      />
      <p className="temperature">16°C</p>
      <p className="location">Birmingham</p>
      <div className="weather-data">
        <div className="col">
          <img
            src={humidity_icon}
            alt="The humidity icon"
          />
          <div>
            <p>87%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img
            src={wind_icon}
            alt="The wind speed icon"
          />
          <div>
            <p>11.2 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
