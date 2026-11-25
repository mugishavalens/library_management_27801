import React from 'react'

function LibraryCards({BookInfo}) {
  return (
    <div style={{border: "3px solid blue", marginTop: "3px"}}>
        <div>{BookInfo.title}</div>
        <div>{BookInfo.code}</div>
        <div>{BookInfo.price}</div>
    </div>
  )
}

export default LibraryCards
