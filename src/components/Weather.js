import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({ data }) => {
  const { name, main } = data

  if (!name) { return null }
  const kelvin = 273.15
  return (
    <div className='card my-2'>
      <h2 className='card-title'>El clima de {name} es :</h2>
      <h3 className='card-text'>
        {parseFloat(main.temp - kelvin, 10).toFixed(2)}
        <span>&#x2103;</span>
      </h3>
      <p className='card-text'>
        <span>Temperatura Maxima : </span>
        {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
        <span>&#x2103;</span>
      </p>
      <p className='card-text'>
        <span>Temperatura Minima : </span>
        {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
        <span>&#x2103;</span>
      </p>
    </div>
  )
}

Weather.propTypes = {
  data: PropTypes.object.isRequired
}

export default Weather
