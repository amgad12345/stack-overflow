import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'


const Answers = props => {
  console.log(props.aid)
  console.log(props.astring)
  
  return (
<li>

      
      <p>{props.aid}</p>
      <p>{props.astring}</p>
    </li>
  )
}

export default Answers