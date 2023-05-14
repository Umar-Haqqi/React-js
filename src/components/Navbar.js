import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-3">
          <a className="navbar-brand" href="/">
            <b>{props.title}</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutLink}
                </a>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutLink: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set a title here",
  aboutLink: "About"
};