import { Link } from 'gatsby'
import React from 'react'

export const Header = ({ siteTitle, siteDescription }) => (
  <>
    <Link to="/">
      <h1>{siteTitle}</h1>
    </Link>
    <p>{siteDescription}</p>
  </>
)
