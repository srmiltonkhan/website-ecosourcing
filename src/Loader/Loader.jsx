import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
       <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader