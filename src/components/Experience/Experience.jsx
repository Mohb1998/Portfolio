import React from 'react'
import "./Experience.css"


import {BsPatchCheckFill} from "react-icons/bs";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have to offer</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>HTML</h4>
                <small>3 years of experience</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>CSS</h4>
                <small>3 years of experience</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>Javascript</h4>
                <small>3 years of experience</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>React</h4>
                <small>2 years of experience</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>Bootstrap</h4>
                <small>3 years of experience</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <div>
                <h4>Figma</h4>
                <small>1 years of experience</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <div className="experience_frontend">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>
                  <h4>Node.js</h4>
                  <small>3 years of experience</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>
                  <h4>Express</h4>
                  <small>3 years of experience</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>
                  <h4>MongoDB</h4>
                  <small>3 years of experience</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>
                  <h4>Heroku</h4>
                  <small>2 years of experience</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>
                  <h4>EmailJs</h4>
                  <small>1 years of experience</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience_details-icons"/>
                <div>
                  <h4>Twilio</h4>
                  <small>1 years of experience</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience