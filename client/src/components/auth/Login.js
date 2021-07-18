import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  
  const history = useHistory()
  const [error, setError] = useState(false)
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  })

  const notify = () => toast.success(`Welcome ${formdata.email}!`, { autoClose: 3000 })
  const notifyError = () => toast.error('Your email or password is not correct!', { autoClose: 3000 })

  const handleChange = (event) => {
    const newFormdata = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(newFormdata)
  }
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/login', formdata)
      setTokenToLocalStorage(data.token)
      notify()
      // console.log(formdata.email)
      setTimeout(function(){
        history.push('/')
      }, 2000)
      // console.log('token', data.token)
      // console.log('response', response)
    } catch (err) {
      console.log(err)
      notifyError()
      setError(true)
    }
  }
  // console.log('form data on state', formdata)

  const handleFocus = () => {
    setError(false)
  }

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-3 p-5">
          <form className="px-4 py-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
              <input onChange={handleChange}
                type="email"
                name="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
                value={formdata.email} 
                onFocus={handleFocus}
              />
                
            </div>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
              <input onChange={handleChange} 
                type="password" 
                name="password" 
                className="form-control" 
                id="exampleDropdownFormPassword1" 
                placeholder="********" 
                value={formdata.password} 
                onFocus={handleFocus} 
              />
            </div>
            {error && <p className="help is-danger">Sorry, your username or password are incorrect</p>}
            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary changingcolor1" id="changingcolor" >Sign in</button>
          </form>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/register">New around here? Sign up</a>
          {/* <a className="dropdown-item" href="#">Forgot password?</a> */}
        </div>
      </div>
    </>
  )
}

export default Login