import React from 'react'
import Container from './Container'

const Login = (props) => {
  const { isLogedIn } = props

  return (
    <Container isLogedIn={isLogedIn} />
  )
}

export default Login