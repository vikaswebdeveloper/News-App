import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    chennaiWeather();
    delhiWeather();
    kolkataWeather();
    bangloreWeather();
  });

  const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: { city: `${search}` },
    headers: {
      "X-RapidAPI-Key": "034ff3e9e0mshce751db1721c409p16d473jsnb6a2f5385f83",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const searched = async function () {
    try {
      const response = await axios.request(options);
      console.log(response);
      setSearch("");
      document.querySelector(".temprature").value =
        "Temp: " + response.data.temp;
      document.querySelector(".humidity").value =
        "Humidity: " + response.data.humidity;
      document.querySelector(".wind").value =
        "Wind Speed: " + response.data.wind_speed;
    } catch (error) {
      console.error(error);
    }
  };

  const changed = function () {
    let searchValue = document.querySelector("#search").value;
    setSearch(searchValue);
  };

  const delhiWeather = async function () {
    const delhi = {
      method: "GET",
      url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
      params: { city: `delhi` },
      headers: {
        "X-RapidAPI-Key": "034ff3e9e0mshce751db1721c409p16d473jsnb6a2f5385f83",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const delhiRes = await axios.request(delhi);
      document.querySelector(".delhiTemp").innerText = delhiRes.data.temp;
      document.querySelector(".delhiHum").innerText = delhiRes.data.humidity;
      document.querySelector(".delhiWind").innerText = delhiRes.data.wind_speed;
    } catch (error) {
      console.log(error);
    }
  };

  const kolkataWeather = async function () {
    const kolkata = {
      method: "GET",
      url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
      params: { city: `Kolkata` },
      headers: {
        "X-RapidAPI-Key": "034ff3e9e0mshce751db1721c409p16d473jsnb6a2f5385f83",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const kolkataRes = await axios.request(kolkata);
      document.querySelector(".kolkataTemp").innerText = kolkataRes.data.temp;
      document.querySelector(".kolkataHum").innerText =
        kolkataRes.data.humidity;
      document.querySelector(".kolkataWind").innerText =
        kolkataRes.data.wind_speed;
    } catch (error) {
      console.log(error);
    }
  };

  const bangloreWeather = async function () {
    const banglore = {
      method: "GET",
      url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
      params: { city: `Bengaluru` },
      headers: {
        "X-RapidAPI-Key": "034ff3e9e0mshce751db1721c409p16d473jsnb6a2f5385f83",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const bangloreRes = await axios.request(banglore);
      document.querySelector(".bangloreTemp").innerText = bangloreRes.data.temp;
      document.querySelector(".bangloreHum").innerText =
        bangloreRes.data.humidity;
      document.querySelector(".bangloreWind").innerText =
        bangloreRes.data.wind_speed;
    } catch (error) {
      console.log(error);
    }
  };

  const chennaiWeather = async function () {
    const chennai = {
      method: "GET",
      url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
      params: { city: `chennai` },
      headers: {
        "X-RapidAPI-Key": "034ff3e9e0mshce751db1721c409p16d473jsnb6a2f5385f83",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const chennaiRes = await axios.request(chennai);

      document.querySelector(".chennaiTemp").innerText = chennaiRes.data.temp;
      document.querySelector(".chennaiHum").innerText =
        chennaiRes.data.humidity;
      document.querySelector(".chennaiWind").innerText =
        chennaiRes.data.wind_speed;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Weather">
      <div className="wrapper">
        <div className="upperLeft">
          <input
            type="text"
            disabled
            placeholder="Temprature"
            className="temprature"
          />
          <input
            type="text"
            disabled
            placeholder="Humidity"
            className="humidity"
          />
          <input
            type="text"
            disabled
            placeholder="Wind Speed"
            className="wind"
          />
        </div>
        <div className="upperRight">
          <input
            type="text"
            className="search"
            value={search}
            id="search"
            placeholder="Search"
            onChange={changed}
          />
          <input type="submit" className="btn" onClick={searched} />
        </div>
        <div className="bottom">
          <h1>Some popular places:-</h1>
          <table>
            <thead>
              <tr>
                <td>State</td>
                <td>Temprature</td>
                <td>Humidity</td>
                <td>Wind Speed</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delhi</td>
                <td className="delhiTemp">0</td>
                <td className="delhiHum">0</td>
                <td className="delhiWind">0</td>
              </tr>
              <tr>
                <td>Kolkata</td>
                <td className="kolkataTemp">0</td>
                <td className="kolkataHum">0</td>
                <td className="kolkataWind">0</td>
              </tr>
              <tr>
                <td>Banglore</td>
                <td className="bangloreTemp">0</td>
                <td className="bangloreHum">0</td>
                <td className="bangloreWind">0</td>
              </tr>
              <tr>
                <td>Chennai</td>
                <td className="chennaiTemp">0</td>
                <td className="chennaiHum">0</td>
                <td className="chennaiWind">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Weather;
