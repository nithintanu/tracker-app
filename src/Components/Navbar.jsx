
import React, { useState } from 'react';

import { Outlet, Link } from "react-router-dom";


function Navbar({ setWidth, handleClick }) {


  // const handleClick = () => {
  //   // Call the setWidth function passed from the parent component
  //   setWidth((prevWidth) => (prevWidth === '950px' ? '1100px' : '950px'));
    
  // };
  return (
    <>

      <nav className="sidebar sidebar-offcanvas" id="sidebar">


        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">



          <img src="assets/images/faces/slazzer-edit-image.png" className='hello' alt="logo" />
          
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">

                  <img
                    className="img-xs rounded-circle "
                    src="assets/images/faces/pic1.jpg"
                    alt=""
                  />
                  <span className="count bg-success" />
                </div>

                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Sai Nithin Malla</h5>
                  <span>Admin</span>
                </div>
              </div>
              <a href="#" id="profile-dropdown" data-toggle="dropdown">
                <i className="mdi mdi-dots-vertical" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                aria-labelledby="profile-dropdown"
              >
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      Account settings
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      Change Password
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      To-do list
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          {/* <li className="nav-item nav-category">
            <span className="nav-link">Navigation</span>
          </li> */}
          <button onClick={handleClick}
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="mdi mdi-menu" />
          </button>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/Dashboard">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer" />
              </span>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item menu-items">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <span className="menu-icon">
                <i className="mdi mdi-laptop" />
              </span>
              <span className="menu-title">Orders</span>
              <i className="menu-arrow" />
            </a>

            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/CurrentOrders">
                    Current Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/PastOrders">
                    Past Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/PendingOrders">
                    Pending Orders
                  </Link>
                </li>
              </ul>
            </div>

          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/Restaurants">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer" />
              </span>
              <span className="menu-title">Restaurants</span>
            </Link>
          </li>

          {/* <li className="nav-item menu-items">
            
          <Link className="nav-link" to="/Restaurants">
                   Restaurants
                  </Link>
          </li> */}


        </ul>
      </nav>

      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <a className="navbar-brand brand-logo-mini" href="#">
            <img src="assets/images/faces/slazzer-edit-image.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          {/* <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="mdi mdi-menu" />
          </button> */}
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products"
                />
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown d-none d-lg-block">
              <a
                className="nav-link btn btn-success create-new-button"
                id="createbuttonDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                + Create New Order
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="createbuttonDropdown"
              >
                <h6 className="p-3 mb-0">Projects</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-file-outline text-primary" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      Software Development
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-web text-info" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">UI Development</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-layers text-danger" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">Software Testing</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <p className="p-3 mb-0 text-center">See all projects</p>
              </div>
            </li>
            <li className="nav-item nav-settings d-none d-lg-block">
              <a className="nav-link" href="#">
                <i className="mdi mdi-view-grid" />
              </a>
            </li>
            <li className="nav-item dropdown border-left">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-email" />
                <span className="count bg-success" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown"
              >
                <h6 className="p-3 mb-0">Messages</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="assets/images/faces/face4.jpg"
                      alt="image"
                      className="rounded-circle profile-pic"
                    />
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      Mark send you a message
                    </p>
                    <p className="text-muted mb-0"> 1 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="assets/images/faces/face2.jpg"
                      alt="image"
                      className="rounded-circle profile-pic"
                    />
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      Cregh send you a message
                    </p>
                    <p className="text-muted mb-0"> 15 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="assets/images/faces/face3.jpg"
                      alt="image"
                      className="rounded-circle profile-pic"
                    />
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      Profile picture updated
                    </p>
                    <p className="text-muted mb-0"> 18 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <p className="p-3 mb-0 text-center">4 new messages</p>
              </div>
            </li>
            <li className="nav-item dropdown border-left">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-bell" />
                <span className="count bg-danger" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <h6 className="p-3 mb-0">Notifications</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar text-success" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Event today</p>
                    <p className="text-muted ellipsis mb-0">
                      {" "}
                      Just a reminder that you have an event today{" "}
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-danger" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Settings</p>
                    <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-link-variant text-warning" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Launch Admin</p>
                    <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <p className="p-3 mb-0 text-center">See all notifications</p>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                id="profileDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <div className="navbar-profile">
                  <img
                    className="img-xs rounded-circle"
                    src="assets/images/faces/pic1.jpg"
                    alt=""
                  />
                  <p className="mb-0 d-none d-sm-block navbar-profile-name">
                    Sai Nithin Malla
                  </p>
                  <i className="mdi mdi-menu-down d-none d-sm-block" />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="profileDropdown"
              >
                <h6 className="p-3 mb-0">Profile</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-success" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Settings</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-logout text-danger" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Log out</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <p className="p-3 mb-0 text-center">Advanced settings</p>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-format-line-spacing" />
          </button>
        </div>
      </nav>




      <Outlet />

    </>
  );
}

export default Navbar;