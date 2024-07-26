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
    </div>
  );
};

export default Weather;
