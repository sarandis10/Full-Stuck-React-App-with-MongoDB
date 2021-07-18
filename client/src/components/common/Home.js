//IMAGES + SLIDE
//BOX LOCATION
//BOX MAPS
//BOX FOR SOMTHING....

import React from 'react'
import { Link } from 'react-router-dom'
import office1 from '../../assets/home_assets/office1.jpg'
import office2 from '../../assets/home_assets/office2.jpg'
import office3 from '../../assets/home_assets/office3.jpg'
import deskspace from '../../assets/home_assets/deskspace.png'
import officespace from '../../assets/home_assets/officespace.png'
import openworkspace from '../../assets/home_assets/openworkspace.png'
import eventspace from '../../assets/home_assets/eventspace.png'
import image1 from '../../assets/home_stories/story2.jpg'
import image2 from '../../assets/home_stories/story3.jpg'
import image3 from '../../assets/home_stories/story4.jpg'

const Home = () => {

  return (
    <>
      {/* _________________________________ */}
      <div className="row taras2 mb-5">
        <div className="col align-self-center">
          <div className="container">
            <div className="card border rounded">
              <div className="card-body">
                <h3 className="card-title text-center boldtext">Reimagine your workspace</h3>
                <p className="card-text text-center boldtext">Find some good spaces to work across the globe or close to you:</p>
                <div className="d-grid">
                  <Link to="/indexandmap" type="button" className="btn btn-outline-primary btn-lg changingcolor1 taras3" id="changingcolor">Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 align-self-center taras-hidden" >
          <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={office1} className="d-block w-100" alt="office1" />
                </div>
                <div className="carousel-item">
                  <img src={office2} className="d-block w-100" alt="office2" />
                </div>
                <div className="carousel-item">
                  <img src={office3} className="d-block w-100" alt="office3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* _________________________________ */}
      {/* _________________________________ */}
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-sm-12 col-md-3 taras1">
            <div className="container">
              <div className="card border rounded ">
                <Link to="/indexandmap" type="button" className="btn btn-outline-secondary box-shadow changingcolor2 card1">
                  <div className="card-body">
                    <h3 className="card-title text-center ">Looking for an office space?</h3>
                    <img src={officespace} className="d-block w-100" alt="officespace" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 taras1">
            <div className="container">
              <div className="card border rounded">
                <Link to="/indexandmap"type="button" className="btn btn-outline-secondary box-shadow changingcolor2" id="changingcolor">
                  <div className="card-body">
                    <h3 className="card-title text-center">Looking for a desk space?</h3>
                    <img src={deskspace} className="d-block w-100" alt="deskspace" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 taras1">
            <div className="container">
              <div className="card border rounded">
                <Link to="/indexandmap" type="button" className="btn btn-outline-secondary box-shadow changingcolor2" id="changingcolor">
                  <div className="card-body">
                    <h3 className="card-title text-center">Looking for an open space?</h3>
                    <img src={openworkspace} className="d-block w-100" alt="openworkspace" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 taras1">
            <div className="container">
              <div className="card border rounded">
                <a href="/events" type="button" className="btn btn-outline-secondary box-shadow changingcolor2" id="changingcolor">
                  <div className="card-body">
                    <h3 className="card-title text-center">Looking for an event space?</h3>
                    <img src={eventspace} className="d-block w-100" alt="eventspace" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* _________________________________ */}
      <div className="width: 100%">
        <div className="row align-items-center" id="containercarousel">
          <div className="col-sm-12 col-md-6">
            <div className="container-fluid">
              <h1 className="align-items-center text-center blockquote mb-0">Find your space with Workspace!</h1>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="container" id="containercarouselright">
              <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src= {image1} className=" d-block w-100" alt="stories"/>
                    <div className="carousel-caption d-none d-md-block" id="corousetext">
                      <h5>Victoria</h5>
                      <p>Workspace - Flexible like working from home but better!</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src= {image2} className=" d-block w-100" alt="stories"/>
                    <div className="carousel-caption d-none d-md-block" id="corousetext">
                      <h5>Valerie</h5>
                      <p>Workspace - To work with my collegues with all flexibility!</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src= {image3} className=" d-block w-100" alt="stories"/>
                    <div className="carousel-caption d-none d-md-block" id="corousetext">
                      <h5>Barry</h5>
                      <p>Workspace - To stay with my best friend!</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home