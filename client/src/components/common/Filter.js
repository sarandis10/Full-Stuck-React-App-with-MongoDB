import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Filter = () => {
  const [workspaces, setWorkspaces] = useState([])
  // console.log(workspaces)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/workspaces')
      setWorkspaces(data)
      // console.log(data)
    }
    getData()
  }, [])

  const [filteredWorkspaces, setFilteredworkspaces] = useState([])

  const handleFilter = (event) => {
    const filteredworkspacesArray = workspaces.filter(item => {
      return item.city === event.target.value
    })
    setFilteredworkspaces(filteredworkspacesArray)
  }

  const uniquecity = []

  workspaces.map(item => {
    if (uniquecity.indexOf(item.city) === -1) {
      uniquecity.push(item.city)
    }
  })
  // console.log(uniquecity)

  const [search, setSearch] = useState('')
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <select className="dropdown" onChange={handleFilter}>{uniquecity.map((item) => {
        if (item === '') {
          return <option key='none' value=''>Other</option>
        } else {
          return (
            <>
              <option key={item.index} value={item}>{item}</option>
            </>
          )
        }
      })}
      <option key='last' value="All">All</option>
      </select>
      <input className="searchbar" type="text" placeholder="Search for a place" onChange={handleSearch} />
      <ul onChange={handleSearch}>{(filteredWorkspaces.length > 0 ? filteredWorkspaces : workspaces).map((item,index) => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return (  
            <>
              <div className="SA-display">
                <div key="index" className="card">
                  <img src={item.image} className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.textDescription}</p>
                    <p className="d-grid taras2">
                      <button className="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target={`#id${index}`} aria-expanded="false" aria-controls={`id${index}`}>Comments and rating</button>
                    </p>
                    <div className="d-grid">
                      <a href={item.link} className="btn btn-outline-primary btn-lg">See location website</a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) 
        }
      })}
      </ul>
    </>
  )
}
export default Filter




