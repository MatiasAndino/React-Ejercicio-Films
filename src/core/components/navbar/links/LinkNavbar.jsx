import React from 'react'

const LinkNavbar = ({ text }) => {
  const linkStyle = {
    // width: '20vw',
    fontSize: 'calc(.3rem + .3vw)',
  }
  return (
    <a className="nav-link text-white" href="#" style={linkStyle} >{text}</a>
  )
}

export default LinkNavbar