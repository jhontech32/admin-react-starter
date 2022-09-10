import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'

const Container = (props) => {
  const { isLogedIn, dispatch } = props

  return (
    <Form
      isLogedIn={isLogedIn}
      dispatch={dispatch}
    />
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Container)