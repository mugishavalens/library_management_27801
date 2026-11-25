import React from 'react'
import { Link } from 'react-router'

function LibraryHeader() {
  return (
    <div>
      <header>
        <Link to="/books" style={{paddingRight:"10px"}}>BOOKS</Link>
        <Link to="/office" style={{paddingRight:"10px"}}>OFFICE</Link>
        <Link to="/" style={{paddingRight:"10px"}}>LOGOUT</Link>
      </header>
    </div>
  )
}

export default LibraryHeader