import React from 'react'
import { Link } from 'react-router-dom'


const TopPart = () => {
  return (
    <>
      <div className="container taras2">
        <h1 className="fs-1 taras1 has-text-grey-bis fw-bolder">Events at CEST</h1>
        <div className="row">
          <div className="col-9 has-text-gray-bis fw-bold">Book a space, whatever bullshit text, something about how happy you gonna be booking with us and how awesome everything will look after you spend hell of a lot of money. Basically a text, that is super important but I am lazy to create a decent trade.</div>
          <Link to="/contactform"><div className="col taras2"><div className="d-grid"><button type="button" className="btn btn-outline-primary btn-lg changingcolor1" id="changingcolor">Book your event</button></div></div></Link>
        </div>
      </div>

    </>
  )
}

export default TopPart