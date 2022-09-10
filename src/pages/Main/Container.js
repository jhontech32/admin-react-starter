import React from 'react'

const Container = (props) => {
  const { component } = props

  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          {component}
        </div>
      </section>
    </div>

  )
}

export default Container