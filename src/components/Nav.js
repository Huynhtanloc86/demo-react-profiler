import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <ul className="nav nav-pills gap-2">
      <li className="nav-item" role="presentation">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item" role="presentation">
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}
