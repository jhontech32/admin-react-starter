import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { me } from '../../actions/auth/authAction'

import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Container from './Container'
import Footer from '../../components/Footer'

const Pages = (props) => {
  const params = useParams()
  const { page } = params || ''
  const { userData, component } = props

  useEffect(() => {
    showUserInfo()
  }, [])

  const showUserInfo = async () => {
    const { dispatch } = props
    await dispatch(me())
  }

  console.log('user dataax', userData)
  console.log('component', component)

  return (
    <div>
      <Navbar userData={userData} />
      <Sidebar userData={userData} />
      <Container
        page={page}
        component={component}
      />
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.authStore.loading,
  userData: state.authStore.userData
})

export default connect(mapStateToProps)(Pages)