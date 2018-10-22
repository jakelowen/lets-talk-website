import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
import SideBar from './SideBar'

// import Header from './header'
// import './layout.css'

const Layout = ({ children }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <SideBar />
        </div>
        <div className="col-sm-1" />
        <div className="col-sm-9">{children}</div>
      </div>
    </div>
    <footer class="blog-footer">
      <p>Copyright 2016, Let's Talk, Inc. 901 Kentucky Ste 305, Lawrence, KS 66044. </p>
      <p>
        <span
          class="e-mail"
          data-user="ofni"
          data-website="gro.ecnerwalklatstel"
        />
      </p>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
