import React from 'react'
import { Button, NavLink } from 'react-bootstrap'
import './Error.css'

const Error = () => {
  return (
    <div className='error'>
        <i className="fa-solid fa-triangle-exclamation fa-4x mb-3"></i>
        <h4 className='mb-3'><span><i className="fa-solid fa-circle-exclamation me-2"></i>404</span> Page Not Found!</h4>
        <NavLink href='/'>
            <Button variant="outline-dark">
            Back
            </Button>
        </NavLink>
    </div>
  )
}

export default Error