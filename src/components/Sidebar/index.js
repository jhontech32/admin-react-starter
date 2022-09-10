import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  const { userData } = props

  const LogoPic = `http://localhost:3000/dist/img/AdminLTELogo.png`
  const UserPic = `http://localhost:3000/dist/img/user2-160x160.jpg`

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/dashboard" className="brand-link">
        <img src={LogoPic} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">Admin <b>Starter</b></span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image pt-3">
            <img src={UserPic} className="img-rounded elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">{userData.firstname} {userData.lastname}</a>
            <a className="cst-normal-text">
              {userData.email}
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        {/* <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div> */}
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-header">MENUS</li>
            <li className="nav-item">
              <Link to='/dashboard' className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                <p className="cst-normal-text">
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/members' className="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p className="cst-normal-text">
                  Members
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i class="nav-icon fas fa-newspaper"></i>
                <p className="cst-normal-text">
                  Blogs
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="pl-2 nav nav-treeview">
                <li className="nav-item">
                  <Link to='/blogs' className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p className="cst-normal-text">
                      Blog Lists
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/blog-categories' className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p className="cst-normal-text">
                      Blog Categories
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/blog-approvals' className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p className="cst-normal-text">
                      Blog Approval
                    </p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to='/push-notification' className="nav-link">
                <i class="nav-icon fas fa-paper-plane"></i>
                <p className="cst-normal-text">
                  Push Notification
                </p>
              </Link>
            </li>
            <li className="nav-header">ACCOUNT INFO</li>
            <li className="nav-item">
              <Link to='/profile' className="nav-link">
                <i className="nav-icon fas fa-user-alt"></i>
                <p className="cst-normal-text">
                  My Profile
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/change-password' className="nav-link">
                <i className="nav-icon fas fa-unlock-alt"></i>
                <p className="cst-normal-text">
                  Change Password
                </p>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a href="../gallery.html" className="nav-link">
                <button className="btn btn-danger btn-block">
                  <i class="nav-icon fas fa-power-off"></i>
                  <p className="cst-normal-text">
                    Logout
                  </p>
                </button>
              </a>
            </li> */}
            <li className="nav-header">OTHERS</li>
            <li className="nav-item">
              <a href="../gallery.html" className="nav-link">
                <i class="nav-icon fas fa-headset"></i>
                <p className="cst-normal-text">
                  Live Support
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../gallery.html" className="nav-link">
                <i class="nav-icon fas fa-download"></i>
                <p className="cst-normal-text">
                  Unduh Aplikasi
                </p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside >
  )
}

export default Sidebar