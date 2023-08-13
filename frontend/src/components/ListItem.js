import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note}) => {
  return (
    <div>
      <h3><Link to={`./${note?.id}`}>{note?.body}</Link></h3>
    </div>
  )
}

export default ListItem
