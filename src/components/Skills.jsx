import React from 'react'
import "../app/App.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
        <div className="main-text scroll-scale">
            <span>technical and professional</span>
            <h2>My Skills</h2>
        </div>

        {/* <!----- SKILL-LEFT -----> */}
        <div className="skill-main">
            <div className="skill-left scroll-scale">
                <h3>Technical Skills</h3>
                <div className="skill-bar">
                    <div className="info">
                        <p>HTML</p>
                        <p>52%</p>
                    </div>

                    <div className="bar">
                        <span className="html"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>CSS</p>
                        <p>57%</p>
                    </div>

                    <div className="bar">
                        <span className="css"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>JavaScript</p>
                        <p>46%</p>
                    </div>

                    <div className="bar">
                        <span className="javascript"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>Python</p>
                        <p>60%</p>
                    </div>

                    <div className="bar">
                        <span className="python"></span>
                    </div>
                </div>
            </div>

            {/* <!----- SKILL-RIGHT -----> */}
            <div className="skill-right scroll-scale">
                <h3>Professional Skills</h3>
                <div className="porfessional">
                    <div className="box">
                        <div className="circle" data-dots="80" data-percent="79"></div>
                        <div className="text">
                            <big>79%</big>
                            <small>Team Work</small>
                        </div>
                    </div>

                    <div className="box">
                        <div className="circle" data-dots="80" data-percent="66"></div>
                        <div className="text">
                            <big>66%</big>
                            <small>Creativity</small>
                        </div>
                    </div>

                    <div className="box">
                        <div className="circle" data-dots="80" data-percent="87"></div>
                        <div className="text">
                            <big>87%</big>
                            <small>Project Management</small>
                        </div>
                    </div>

                    <div className="box">
                        <div className="circle" data-dots="80" data-percent="40"></div>
                        <div className="text">
                            <big>40%</big>
                            <small>Comiunication</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
