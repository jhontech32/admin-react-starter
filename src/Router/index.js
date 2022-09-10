import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'

import Protected from './Protected'

import Login from '../pages/Login'
import Register from '../pages/Register'

import Dashboard from '../pages/Dashboard'
import Members from '../pages/Users/View'
import MemberDetail from '../pages/Users/Detail'

import PushNotification from '../pages/PushNotification'
import Blogs from '../pages/Blogs/View'
import BlogCategories from '../pages/Blogs/Categories'
import BlogApprovals from '../pages/Blogs/Approvals'

import Profile from '../pages/Account/Profile'
import ChangePassword from '../pages/Account/ChangePassword'
import ForgotPassword from '../pages/Account/ForgotPassword'

import NotFound from '../pages/NotFOund'

const Router = (props) => {
  const { isLogedIn } = props

  console.log('IS LOGIN =', isLogedIn)

  return (
    <Routes>
      <Route path='/' exact element={<Login isLogedIn={isLogedIn} />} />
      <Route path='/register' exact element={<Register />} />

      <Route
        path='/dashboard'
        element={
          <Protected isLogedIn={isLogedIn}>
            <Dashboard />
          </Protected>
        }
      />
      <Route path='/members' element={<Members />} />
      <Route path='/member/:id' element={<MemberDetail />} />

      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blog-categories' element={<BlogCategories />} />
      <Route path='/blog-approvals' element={<BlogApprovals />} />

      <Route path='/push-notification' element={<PushNotification />} />

      <Route path='/profile' element={<Profile />} />
      <Route path='/change-password' element={<ChangePassword />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router