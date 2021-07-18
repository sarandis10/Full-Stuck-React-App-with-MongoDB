import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FilterIndexAndMap from './FilterIndexAndMap'
import DisplayIndexAndMap from './DisplayIndexAndMap'

import MapTwo from './MapTwo'

const IndexAndMap = () => {
  const [myData, setMyData] = useState(null)
  const [hasError, setHasError] = useState(false)

  const [filteredData, setFilteredData] = useState(null)
  // const [finalDisplay, setFinalDisplay] = useState(null)


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/workspaces')
        setMyData(data)
        setFilteredData(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  if (!myData) return null
  if (!filteredData) return null
  console.log(hasError)




  const handleTextFilter = (event) => {
    const regexp = new RegExp(event.target.value, 'i')
    const filterTextArray = myData.filter(item => {
      return regexp.test(item.name)
    })
    setFilteredData(filterTextArray)
  }


  // setFinalDisplay(filteredData.length ? filteredData : myData)

  const styles = {
    row: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    colImage: {
      display: 'flex',
      flexWrap: 'wrap',
      overflowY: 'scroll',
      height: '80vh',
    }, colMap: {
      height: '80vh',
      // paddingLeft: '6.8vw',
    },
  }

  return (
    <div className="container">
      <FilterIndexAndMap
        handleTextFilter={handleTextFilter} />
      <div className="row" style={styles.row}>
        <div className="col-sm-12 col-md-3" style={styles.colImage}>
          <DisplayIndexAndMap
            myData={myData}
            filteredData={filteredData} />
        </div>
        <div className="col-sm-12 col-md-9" style={styles.colMap}>
          <MapTwo
            filteredData={filteredData}
            myData={myData} />          
        </div>
      </div>
    </div>
  )
}

export default IndexAndMap

