import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../../helpers/auth'
import WorkspacesForm from '../Workspaces/WorkspacesForm'

const WorkspacesNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
    phoneNumber: '',
    long: '',
    lat: '',
    link: '',
    image: '',
    textDescription: '',
    facilities: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
    phoneNumber: '',
    long: '',
    lat: '',
    link: '',
    image: '',
    textDescription: '',
    facilities: '',
  })

  const history = useHistory()

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/workspaces', formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push('/')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }




  return (
    <section className="">
      <div className="container">
        <WorkspacesForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          errors={errors}
          text="Register new workspace"
        />
      </div>
    </section>
  )
}

export default WorkspacesNew