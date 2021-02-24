import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'


const Questions = props => {
  console.log(props.z)
  console.log(props.title)
  
  return (
<li>
      <header>{props.z}</header>
     <Link to={`/SingleQuestion/${props.z}`}><p>{props.title}</p></Link>
      <p>{props.sring}</p>
      <p>{props.vote}</p>
    </li>
  )
}

export default Questions
