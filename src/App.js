import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter
} from 'react-router-dom'
import { getUserToken } from './utils/storage'

// Toast
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'

import store from './store'
import Router from './Router'


const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(false)

  useEffect(() => {
    checkUserToken()
  }, [])

  const checkUserToken = async () => {
    const token = await getUserToken()
    token ? setIsLogedIn(true) : setIsLogedIn(false)
  }

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Router isLogedIn={isLogedIn} />
        </Provider>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App;
