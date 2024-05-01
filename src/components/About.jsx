import React from 'react'
import "../app/App.css";

export default function About() {
  return (
    <section id="about" className="about">
        <div className="img-about scroll-scale">
            <img src="received_521628159513594.jpeg"></img>
        </div>

        <div className="about-content scroll-scale">
            <span>Let me introduce myself</span>
            <h2>About Me</h2>
            <h3>A story of good</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae sequi unde vel. Provident consectetur facilis recusandae? Laborum, maiores eveniet.</p>
            
            <div className="btn-box">
                <a href="#" className="btn">Read More!</a>
            </div>
        </div>
    </section>
  )
}
