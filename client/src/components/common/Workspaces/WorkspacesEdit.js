import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../../helpers/auth'

import WorkspacesForm from './WorkspacesForm'

const WorkspacesEdit = () => {
  const history = useHistory()
  const { id } = useParams()
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

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/workspaces/${id}`)
      setFormData(data)
    }
    getData
  }, [id])

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(`/api/workspaces/${id}`, formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push(`/workspaces/${id}`)
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
          text="Edit your workspace"
        />
      </div>
    </section>
  )
}

export default WorkspacesEdit