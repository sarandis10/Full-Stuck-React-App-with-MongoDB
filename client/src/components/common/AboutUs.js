import React from 'react'
import newyork from '../../assets/about_us/newyork.jpeg'
import london from '../../assets/about_us/london.jpeg'
import lisbon from '../../assets/about_us/lisbon.jpeg'
import cristina from '../../assets/about_us/home_cristina.jpeg'
import emile from '../../assets/about_us/home_emile.png'
import sarantis from '../../assets/about_us/home_sarantis.jpeg'
import taras from '../../assets/about_us/home_taras.jpeg'

const AboutUs = () => {

  return (
    <>
      <div className="profilecontainer taras4">
        <div className="container marketing taras4">
          <div className="row">
            <div className="col-md-3 mb-5 mt-5">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={cristina}></img>
              <h2 className="aboutusname mb-1">Cristina</h2>
              <p className="mb-2">Junior full-stack developer</p>
              <p><a className="btn btn-secondary changingcolor2" id="changingcolor1" href="https://www.linkedin.com/in/cristinagrandeit/">View details »</a></p>
            </div>
            <div className="col-md-3 mb-5 mt-5">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={emile}></img>
              <h2 className="aboutusname mb-1">Emile</h2>
              <p className="mb-2">Junior full-stack developer</p>
              <p><a className="btn btn-secondary changingcolor2" id="changingcolor1" href="https://www.linkedin.com/in/emilesherrott/">View details »</a></p>
            </div>
            <div className="col-md-3 mb-5 mt-5">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={sarantis}></img>
              <h2 className="aboutusname mb-1">Sarantis</h2>
              <p className="mb-2">Junior full-stack developer</p>
              <p><a className="btn btn-secondary changingcolor2" id="changingcolor1" href="https://github.com/sarandis1010">View details »</a></p>
            </div>
            <div className="col-md-3 mb-5 mt-5">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={taras}></img>
              <h2 className="aboutusname mb-1">Taras</h2>
              <p className="mb-2">Junior full-stack developer</p>
              <p><a className="btn btn-secondary changingcolor2" id="changingcolor1" href="https://www.linkedin.com/in/taras-kiricenko-46b74a211/">View details »</a></p>
            </div>
          </div>
        </div>
        <hr />
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={london} className=" d-block w-100" alt="stories" height="60%" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1 className="fw-bold">If you are not registered yet</h1>
                  <p className="fw-bold">Sign up today to get 25% of discount on your first reservetion..</p>
                  <p><a className="btn btn-lg btn-primary changingcolor2" id="changingcolor1" href="/login">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={newyork} className=" d-block w-100" alt="stories" height="60%" />
              <div className="container">
                <div className="carousel-caption">
                  <h1 className="fw-bold">Working remotely</h1>
                  <p className="fw-bold">Read about our new study to see how the furure of the work will look like.</p>
                  <p><a className="btn btn-lg btn-primary changingcolor2" id="changingcolor1" href="/">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={lisbon} className=" d-block w-100" alt="stories" height="60%" />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1 className="fw-bold">To find out more</h1>
                  <p className="fw-bold">About out locations and offers check our gallery clicking below.</p>
                  <p><a className="btn btn-lg btn-primary changingcolor2" id="changingcolor1" href="/indexandmap">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default AboutUs