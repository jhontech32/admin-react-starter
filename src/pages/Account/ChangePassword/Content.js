import React from 'react'
import Header from '../../../components/Header'

const Content = () => {
  return (
    <>
      <br />
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-body">
              <Header title="Change Password" />
              <p>This is content change password.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content