import React from 'react'
import { Link } from 'react-router-dom'

function Landing(){

  return (
    <div>
        <h3>LANDING PAGE</h3>
        <Link to='/character'><h5>Link to character</h5></Link>
    </div>
  )
}

export default Landing