import React from 'react'

import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" taget="_blank"><BsLinkedin/></a>
        <a href="https://github.com" taget="_blank"><FaGithub/></a>
        <a href="https://faceboo.com" taget="_blank"><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials