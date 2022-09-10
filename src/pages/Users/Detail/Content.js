import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
// import { get as getMembers } from '../../actions/member/memberAction'

import Header from '../../../components/Header'

const Content = (props) => {
  const params = useParams()
  const { id } = params || ''
  // useEffect(() => {
  //   showMembers()
  // }, [])

  // const { dispatch, list } = props

  // const showMembers = async () => {
  //   await dispatch(getMembers())
  // }

  // console.log('all members', list)

  return (
    <>
      <br />
      <div className="card card-primary card-outline">
        <div className="card-body">
          <Header title="Member Detail" />
          <div className="row">
            <div className="col-xl-4">
              {/* Profile picture card*/}
              <div className="card mb-4 mb-xl-0">
                <div className="card-header">Member Picture</div>
                <div className="card-body text-center">
                  {/* Profile picture image*/}
                  <img className="cst-avatar-profile img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt />
                  {/* Profile picture help block*/}
                  <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                  {/* Profile picture upload button*/}
                  <button className="btn btn-primary" type="button">Upload new image</button>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              {/* Account details card*/}
              <div className="card mb-4">
                <div className="card-header">Member Details</div>
                <div className="card-body">
                  <form>
                    {/* Form Group (username)*/}
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputMembername">Membername (how your name will appear to other users on the site)</label>
                      <input className="form-control" id="inputMembername" type="text" placeholder="Enter your username" defaultValue="username" />
                    </div>
                    {/* Form Row*/}
                    <div className="row gx-3 mb-3">
                      {/* Form Group (first name)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue="Valerie" />
                      </div>
                      {/* Form Group (last name)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue="Luna" />
                      </div>
                    </div>
                    {/* Form Row        */}
                    <div className="row gx-3 mb-3">
                      {/* Form Group (organization name)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                        <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" defaultValue="Start Bootstrap" />
                      </div>
                      {/* Form Group (location)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLocation">Location</label>
                        <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" defaultValue="San Francisco, CA" />
                      </div>
                    </div>
                    {/* Form Group (email address)*/}
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                      <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue="name@example.com" />
                    </div>
                    {/* Form Row*/}
                    <div className="row gx-3 mb-3">
                      {/* Form Group (phone number)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                        <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue="555-123-4567" />
                      </div>
                      {/* Form Group (birthday)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                        <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" defaultValue="06/10/1988" />
                      </div>
                    </div>
                    {/* Save changes button*/}
                    <button className="btn btn-primary btn-block" type="button">Save changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  loading: state.memberStore.loading,
  list: state.memberStore.list
})

export default connect(mapStateToProps)(Content)