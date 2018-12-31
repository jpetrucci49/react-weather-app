import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '5ebd6ebd98874acd900224021181711'

class App extends Component {
    state = {
        city: undefined,
        region: undefined,
        country: undefined,
        humidity: undefined,
        temp: undefined,
        windSpeed: undefined,
        error: undefined
    }

    getWeather = async e => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const call = await fetch(`https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`)
        const data = await call.json()
        console.log(data)
        if (city && !data.error) {
            this.setState({
                city: data.location.name,
                region: data.location.region,
                country: data.location.country,
                humidity: data.current.humidity,
                temp: data.current.temp_c,
                windSpeed: data.current.wind_mph,
                error: ''
            })
        } else {
            this.setState({
                city: undefined,
                region: undefined,
                country: undefined,
                humidity: undefined,
                temp: undefined,
                windSpeed: undefined,
                error: 'Please enter a valid city, state, or zip code.'
            })
        }
    }
  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather
            city={this.state.city}
            region={this.state.region}
            country={this.state.country}
            humidity={this.state.humidity}
            temp={this.state.temp}
            windSpeed={this.state.windSpeed}
            error={this.state.error}
            />
      </div>
    )
  }
}

export default App
