import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({
  title
}) => {

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h2>{title}</h2>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
              <li className="breadcrumb-item active">{title}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header