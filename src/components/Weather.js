import React, { Component } from 'react'

class Weather extends Component {
	render() {
		return (
			<div>
			{this.props.city && <p>City: {this.props.city}</p>}
			{this.props.region && <p>Region: {this.props.region}</p>}
			{this.props.country && <p>Country: {this.props.country}</p>}
			{this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
			{this.props.temp && <p>Temp: {this.props.temp} &deg;C</p>}
			{this.props.windSpeed && <p>Wind Speed: {this.props.windSpeed} MPH</p>}
			{this.props.error && <p>{this.props.error}</p>}
			</div>
		)
	}

}

export default Weather
