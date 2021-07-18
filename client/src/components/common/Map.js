import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

const Map = () => {
  console.log(('TOKEN', process.env.REACT_APP_MAPBOX_ACCESS_TOKEN))

  const [viewPort, setViewPort] = useState(null)


  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords
      setViewPort({ longitude, latitude })
    })
  }, [])

  return (
    <div className="map-container"> 
      {viewPort ?
        // 1.we start with this add the token we have added on the .evn file
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/streets-v11'
          latitude={viewPort.latitude}
          longitude={viewPort.longitude}
          zoom={12}
          
        >
          {/* //4. marker shows where you are needs to be inside the React MApGL dont forget the imports */}
          <Marker latitude={viewPort.latitude} longitude={viewPort.longitude}>
            ✔
          </Marker>
        </ReactMapGL>
        :
        <h1>Loading your location...</h1>
      }
    </div>
  )
}

export default Map
