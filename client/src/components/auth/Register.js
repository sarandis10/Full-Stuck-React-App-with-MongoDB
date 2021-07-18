import React, { useState } from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Register = () => {
  // const history = useHistory()
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }, [])

  const notify = () => toast.success('Thank you for registering!', { autoClose: 3000 })
  // const notifyError = () => toast.error('Your email or password is not correct!', { autoClose: 3000 })

  const handleChange = (event) => {
    const newFormData = { ...formdata, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormdata(newFormData)
    setErrors(newErrors)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/register', formdata)
      notify()
      // console.log(formdata.username)

      // history.push('/login')
    } catch (err) {
      // console.log(err)
      // setErrors(err.response.data.errors) 
      setErrors(err.response.data.errors)
      // console.log('ERRORS ON STATE', errors)
    }
  }


  return (
    <>
      <div>
        <ToastContainer />
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-3 mt-5">
            <form className="px-4 py-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Username</label>
                <input
                  onChange={handleChange}
                  type="username"
                  name="username"
                  className="form-control"
                  id="exampleDropdownFormEmail1.2"
                  placeholder="jane.doe"
                  value={formdata.username} />
                {errors.username && <p className="text-danger">{errors.username.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="form-control "
                  id="exampleDropdownFormEmail1"
                  placeholder="email@example.com"
                  value={formdata.email}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                <input onChange={handleChange} type="password" name="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="********" value={formdata.password}
                />
                {errors.password && <p className="alert alert-danger" role="alert">{errors.password.message}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password Confirmation</label>
                <input onChange={handleChange} type="password" name="passwordConfirmation" className="form-control" id="exampleDropdownFormPassword1.1" placeholder="********" value={formdata.passwordConfirmation}
                />
                {errors.passwordConfirmation && <p className="alert alert-danger" role="alert">{errors.passwordConfirmation.message}</p>}
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                  <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary changingcolor1" id="changingcolor">Register</button>
            </form>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item mb-5" href="/Register">New around here? Sign up</a>
            {/* <a className="dropdown-item" href="#">Forgot password?</a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Register