import React from 'react'
import stackimg from './images/Stackimg.jpg'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <ul className= "header-List">
    <li className= "header-Img"><img className="myPic" src={stackimg} height="70px"></img></li>
    <li><a>Home</a></li>
    <li> <input/></li>
    <li><a>Search</a></li>
    <li><a>Browse</a></li>
    <li><Link to={`/AskQuestion/`}><a>Ask A Question</a></Link></li>
    
    </ul>
  )
}

export default NavBar
