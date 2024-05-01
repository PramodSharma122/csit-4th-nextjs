import React from 'react'

export default function Projects() {
  return (
    <section id="portfolio" className="portfolio">
        <div className="main-text scroll-scale">
            <span>What i will do for you</span>
            <h2>Latest Project</h2>
        </div>

        <div className="container">
            <div className="filter-button scroll-scale">
                <button className="button" data-filter="all">All</button>
                <button className="button" data-filter=".product">Product</button>
                <button className="button" data-filter=".inter">Interacting</button>
                <button className="button" data-filter=".web">Web App</button>
            </div>

            <div className="portfolio-gallery scroll-bottom">
                <div className="port-box mix product">
                    <div className="port-image">
                        <img src="1.jpg" alt=""></img>
                    </div>

                    <div className="port-content">
                        <h3>Graphics Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores illo, sint quibusdam tenetur nam dicta numquam beatae est ipsum.</p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="port-box mix product">
                    <div className="port-image">
                        <img src="2.jpg" alt=""></img>
                    </div>

                    <div className="port-content">
                        <h3>Graphics Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores illo, sint quibusdam tenetur nam dicta numquam beatae est ipsum.</p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="port-box mix inter">
                    <div className="port-image">
                        <img src="3.jpg" alt=""></img>
                    </div>

                    <div className="port-content">
                        <h3>Graphics Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores illo, sint quibusdam tenetur nam dicta numquam beatae est ipsum.</p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="port-box mix inter">
                    <div className="port-image">
                        <img src="4.jpg" alt=""></img>
                    </div>

                    <div className="port-content">
                        <h3>Graphics Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores illo, sint quibusdam tenetur nam dicta numquam beatae est ipsum.</p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="port-box mix inter">
                    <div className="port-image">
                        <img src="5.jpg" alt=""></img>
                    </div>

                    <div className="port-content">
                        <h3>Graphics Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores illo, sint quibusdam tenetur nam dicta numquam beatae est ipsum.</p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>

                <div className="port-box mix web">
                    <div className="port-image">
                        <img src="6.jpg" alt=""></img>
                    </div>

                    <div className="port-content">
                        <h3>Graphics Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio asperiores illo, sint quibusdam tenetur nam dicta numquam beatae est ipsum.</p>
                        <a href="#"><i className="bx bx-link-external"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
