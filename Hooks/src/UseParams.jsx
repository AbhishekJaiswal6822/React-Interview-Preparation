/*
The useParams hook is a built-in custom hook provided by the react-router-dom library (not core React). 
Its primary purpose is to read and extract dynamic parameters (wildcards) directly from the current browser URL.
*/
import React from 'react'
import { useParams } from 'react-router-dom'

function UseParams() {
    const {username} = useParams()
  return (
    <>
    <h1>Use Params Notes </h1>
    <div>This is the extracted params : {username} </div>
    </>
  )
}

export default UseParams