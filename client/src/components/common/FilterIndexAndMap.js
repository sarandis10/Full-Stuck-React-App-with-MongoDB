import React from 'react'

const FilterIndexAndMap = ({ handleTextFilter }) => {

  const styles = {
    input: {
      margin: '3vh 0vh 3vh 0vh',
    },
  }

  return (
    <input
      style={styles.input}
      id="text-filter"
      className="form-control"
      Filter type="text"
      placeholder="Search Workspaces" onChange={handleTextFilter} />
  )
}

export default FilterIndexAndMap