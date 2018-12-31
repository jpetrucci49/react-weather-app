import React, { Component } from 'react'

class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.getWeather}>
				<label>Enter City, State, Zip Code or other region</label><br />
				<input type='text' name='city' placeholder='City...' />
				<button>Get Weather</button>
			</form>
		)
	}

}

export default Form
