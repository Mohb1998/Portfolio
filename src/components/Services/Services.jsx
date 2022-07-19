import React from 'react'
import "./Services.css"

import {HiCheck} from "react-icons/hi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services_list">
            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services_head">
            <h3>Web development Design</h3>
          </div>
          <ul className="services_list">
            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services_head">
            <h3>Backend development Design</h3>
          </div>
          <ul className="services_list">
            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>

            <li>
              <HiCheck className="services_list-icon"/>
              <p>Lorem ipsom </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}


export default Services