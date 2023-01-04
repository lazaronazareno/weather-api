import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ message }) => {
  return (
    <div className='d-flex flex-column my-2'>
      <span className='bg-danger p-2 text-white rounded'>{message}</span>
    </div>
  )
}

Error.proptypes = {
  message: PropTypes.string.isRequired
}

export default Error
