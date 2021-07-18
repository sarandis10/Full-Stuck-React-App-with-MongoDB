import React from 'react'
import facebook from '../../assets/footer/facebook.png'
import instagram from '../../assets/footer/instagramsvg.svg'
import tweeter from '../../assets/footer/twittersvg.png'
import linkedin from '../../assets/footer/linkedinsvg.png'
import { Link } from 'react-router-dom'
// import facebook from '../../assets/footer/facebook.png'
// import instagram from '../../assets/footer/instagram.png'
// import tweeter from '../../assets/footer/tweeter.png'
// import linkedin from '../../assets/footer/linkedin.png'
// import { Link } from 'react-router-dom'






const Footer = () => {

  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section
          className="d-flex justify-content-center align-items-center justify-content-lg-end p-5 border-bottom fw-bold">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <img src={facebook} width="36" height="36" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
              <img src={linkedin} width="36px" height="36px"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
              <img src={tweeter} width="36px" height="36px"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
              <img src={instagram} width="36px" height="36px"></img>
            </a>
          </div>
        </section>


        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 boldtext">
                  Company
                </h6>
                <p>
                  <a href="/AboutUs" className="text-reset fw-bold">ABOUT US</a>
                </p>
              </div>


              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 boldtext">
                  Contact</h6>
                <p className="text-reset fw-bold" id="cursor">info@cestdesk.com</p>
                <p className="text-reset fw-bold taras4" >New York, NY 10012, US</p>
                <p className="text-reset fw-bold">0044 1774 5678 878</p>
                <p className="text-reset fw-bold">0044 7574 5678 878</p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 boldtext">
                  Impact
                </h6>
                <p>
                  <Link to="/indexandmap" className="text-reset fw-bold">Map</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" styles="background-color: rgba(0, 0, 0, 0.05);">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> CEST-DevelopmentTeam</a>
        </div>

      </footer>

    </>
  )
}

export default Footer




