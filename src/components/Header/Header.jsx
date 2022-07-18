import React from 'react'
import "./Header.css"

import CallToAction from "./CallToAction"
import HeaderSocials from "./HeaderSocials"

import me from "../../assets/me.png"

const Header = () => {
  return (
    <header>
      <div id="home" className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mohb Khaled</h1>
        <h5 className="text-light">Full stack web developer</h5>

        <CallToAction />

        <HeaderSocials />

        <div className="me">
          <img src={me} alt=""/>
        </div>

        <a href="#contact" className="scroll_down">Scroll down</a>
      </div>
    </header>
  )
}

export default Header