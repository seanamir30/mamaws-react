import React from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'

const Item = () => {
    axios.get(`http://${process.env.REACT_APP_URL}/item`)
  return (
    <div>Item</div>
  )
}

export default Item