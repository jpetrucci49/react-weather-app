import React from 'react'

const Weather = props => (
	<div>
		{props.city && <p>City: {props.city}</p>}
		{props.region && <p>Region: {props.region}</p>}
		{props.country && <p>Country: {props.country}</p>}
		{props.humidity && <p>Humidity: {props.humidity}%</p>}
		{props.temp && <p>Temp: {props.temp} &deg;C</p>}
		{props.windSpeed && <p>Wind Speed: {props.windSpeed} MPH</p>}
		{props.error && <p>{props.error}</p>}
	</div>
)

export default Weather
