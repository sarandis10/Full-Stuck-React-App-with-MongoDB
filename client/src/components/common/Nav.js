import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from '../../helpers/auth'
import LogoHome from '../../assets/home_assets/LogoHome2.png'

const Nav = () => {


  const history = useHistory()

  const { pathname } = useLocation()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  useEffect(() => {
    userIsAuthenticated()
  }, [pathname])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><img src={LogoHome} id="mainlogo"></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/ideas" className="nav-link active boldtext" aria-current="page">21<sup>st</sup> IDEAS</Link>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link boldtext">CONTACT US</Link>
            </li>
            <li className="nav-item">
              <Link to="/workspaces/new" className="nav-link boldtext">REGISTER A WORKSPACE </Link>
            </li>
            {!userIsAuthenticated() ?
              <li className="nav-item">
                <Link to="/login" className="nav-link boldtext">LOGIN</Link>
              </li>
              :
              <li className="nav-item">
                <span onClick={handleLogout} className="nav-link boldtext" id="cursor">LOG OUT</span>
              </li>
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav