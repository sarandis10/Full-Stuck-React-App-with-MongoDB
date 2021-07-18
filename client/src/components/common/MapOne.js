import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'


const MapOne = () => {
  const [myData, setMyData] = useState(null)
  const [popup, setPopup] = useState(null)

  console.log(popup)


  const [viewport, setViewport] = useState({
    latitude: 52.515,
    longitude: -0.078,
    zoom: 4,
  })



  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/workspaces')
        setMyData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


  return (
    <>
      <div className="map-container">
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='80vh'
          width='80vh'
          mapStyle='mapbox://styles/mapbox/streets-v11'
          {...viewport}

          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {myData.map(iter => {
            return (<Marker key={iter._id} latitude={parseFloat(iter.lat)} longitude={parseFloat(iter.long)}>
              <span onClick={() => setPopup(myData)}>
                {'📍'}
              </span>
            </Marker>)

          })}
          {popup &&
            myData.map(iter => {
              return (
                <Popup key={iter._id}
                  latitude={parseFloat(iter.lat)}
                  longitude={parseFloat(iter.long)}
                  onClose={() => setPopup(null)}
                >
                  <div>{iter.name}</div>
                  
                </Popup>
              )
            })
          }
        </ReactMapGL>

      </div>
    </>
  )
}
export default MapOne
