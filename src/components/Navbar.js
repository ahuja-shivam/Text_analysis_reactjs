import React from 'react'
import PropTypes from 'prop-types'

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += "responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

export default function Navbar(props) {
  return (
    <div className="topnav" id = "myTopnav">
      <a href="/">{props.home}</a>
      <a href="/">{props.about}</a>
      <a href="/">Contact</a>
      <a href="/">News</a>
      <button type='submit'><i className="fa fa-search"></i></button>
      <input className='search1' type="text" placeholder='Search..'/>
      <a href="/" className='icon'>
      <i className='fa fa-bars'></i>
      </a>
    </div>
  )
}


Navbar.propTypes = {
    home: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    about: "this is about",
}