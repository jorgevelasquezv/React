import React from 'react'
import PropTypes from 'prop-types'

export const GifGrid = ({url, tittle}) => {
  return (
    <div className='card'>
      <img src={url} alt={tittle} />
      <p>{ tittle }</p>
    </div>
  )
}

GifGrid.propTypes = {
  tittle: PropTypes.string,
  url: PropTypes.string
}

