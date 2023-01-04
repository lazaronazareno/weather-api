import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <nav className='navbar p-0'>
      <div className='container-fluid bg-warning'>
        <a href='#!' className='navbar-brand fs-2'>{title}</a>
      </div>
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
