import React from 'react'
import { useHistory } from 'react-router-dom'






const ContactForm = () => {
  const history = useHistory()

  const goBACK = () => {
    alert('Thank you for your message, one of our team members will be getting in touch with you shortly!')
    history.push('/')
  }

  return (
    <>
      <form className="row g-3 taras2" onSubmit={goBACK}>
        <div className="container taras2">
          <div className="container taras2">
            <div className="mb-3">
              <label htmlFor="FormControlInput1" className="form-label ">Your email address</label>
              <input name="fname" type="email" className="form-control" id="FormControlInput1" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="FormControlInput2" className="form-label ">Your phone number</label>
              <input type="tel" className="form-control" id="FormControlInput2" placeholder="+447123456789" required />
            </div>
            <div className="mb-3">
              <label htmlFor="FormControlInput3" className="form-label ">City of location</label>
              <input type="tel" className="form-control" id="FormControlInput3" placeholder="London" required />
            </div>
            <div className="mb-3">
              <label htmlFor="FormControlTextarea1" className="form-label">Tell us about your enquiry</label>
              <textarea className="form-control" id="FormControlTextarea1" rows="6" placeholder="Contact us via this form" required></textarea>
            </div>
            <div className="d-grid">
              {/* <button className="btn btn-primary" type="submit" onClick={showAlert}>Submit</button> */}
              <button className="btn btn-primary changingcolor2" id="changingcolor1" type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm