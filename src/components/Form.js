import React from 'react'

const Form = props => (
	<form onSubmit={props.getWeather}>
		<label>Enter City, State, Zip Code or other region</label><br />
		<input type='text' name='city' placeholder='City...' />
		<button>Get Weather</button>
	</form>
)

export default Form
