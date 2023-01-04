import { useEffect, useState } from 'react'
import './App.css'
import Error from './components/Error'
import Form from './components/Form'
import Header from './components/Header'
import Weather from './components/Weather'

function App () {
  const [values, setValues] = useState({
    city: '',
    country: ''
  })

  const [isSearching, setIsSearching] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  const { city, country } = values

  const getWeather = async () => {
    const apiKey = process.env.REACT_APP_APIKEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`

    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setIsSearching(false)

    if (data.cod === '404') {
      setError(true)
    } else {
      setError(false)
    }
  }

  useEffect(() => {
    if (isSearching) {
      getWeather()
    }
  }, [isSearching])

  return (
    <div className='App'>
      <Header title='Clima React' />

      <div className='container-fluid'>
        <div className='row my-2'>
          <div className='col-sm-6'>
            <Form
              values={values}
              setValues={setValues}
              setIsSearching={setIsSearching}
            />
          </div>
          <div className='col-sm-6'>
            {error
              ? <Error message='No hay resultados' />
              : <Weather data={data} />}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
