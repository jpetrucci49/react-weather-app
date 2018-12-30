import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '5ebd6ebd98874acd900224021181711'

class App extends Component {
    getWeather = async e => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const call = await fetch(`https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`)
        const data = await call.json()
        console.log(data)
    }
  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    )
  }
}

export default App
