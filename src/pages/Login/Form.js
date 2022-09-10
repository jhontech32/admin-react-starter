import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Navigate, Link } from 'react-router-dom'
import { submit as login } from '../../actions/auth/authAction'

const Form = ({
  isLogedIn,
  dispatch
}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    // prevent untuk mencegah reload page
    e.preventDefault()

    // data
    const data = { email, password }

    // login method
    await dispatch(login(data))
  }

  if (isLogedIn)
    return <Navigate to='/dashboard' />

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h2 className="mb-2 text-center">Sign In</h2>
            <small id="emailHelp" className="mb-4 form-text text-center">Already Have an Account?</small>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className="row">
                <div className="col-md-12 text-right">
                  <span>Forgot Password ? <Link to='/forgot-password'>Recovery Here.</Link></span>
                </div>
              </div> */}
              {/* <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div> */}
              <button
                type="submit"
                className="btn btn-primary btn-block mv-5"
              >
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
              <p className="small fw-bold mt-1 pt-1 mb-0">Forgot Password ? <Link to='/forgot-password' className="link-danger">Recovery</Link></p>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Form)