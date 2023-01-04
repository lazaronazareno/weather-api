import React, { useState } from 'react'
import { countries } from '../utils'
import Error from './Error'
import PropTypes from 'prop-types'

const Form = ({ values, setValues, setIsSearching }) => {
  const [error, setError] = useState(false)

  const { city, country } = values

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (city.trim() === '' || country.trim() === '') {
      setError(true)
      return
    }

    setError(false)
    setIsSearching(true)
  }

  return (
    <form
      className='d-flex flex-column'
      onSubmit={handleSubmit}
    >
      <div className='form-floating mb-3'>
        <input
          type='text'
          name='city'
          id='city'
          className='form-control'
          value={city}
          onChange={handleChange}
        />
        <label htmlFor='city'>Ciudad</label>
      </div>

      <div className='form-floating mb-3'>
        <select
          name='country'
          id='country'
          className='form-select'
          value={country}
          onChange={handleChange}
        >
          <option value=''>--Seleccione Pais--</option>
          {countries.map(country => (
            <option key={country.value} value={country.value}>{country.name}</option>
          ))}
        </select>
        <label htmlFor='country'>Pais</label>
      </div>

      {error ? <Error message='Todos los campos son obligatorios' /> : null}

      <button className='btn btn-warning'>Buscar Clima</button>
    </form>
  )
}

Form.propTypes = {
  values: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
  setIsSearching: PropTypes.func.isRequired
}

export default Form
