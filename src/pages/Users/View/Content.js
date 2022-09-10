import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { get as getMembers } from '../../../actions/member/memberAction'

import Header from '../../../components/Header'
import Table from './Table'

const Content = (props) => {
  useEffect(() => {
    showMembers()
  }, [])

  const { dispatch, list } = props

  const showMembers = async () => {
    await dispatch(getMembers())
  }

  console.log('all members', list)

  return (
    <>
      <br />
      <div className="card card-primary card-outline">
        <div className="card-body">
          <Header title="Member List" />
          <Table data={list} />
          {/* {
              list && list.length > 0 ? (
                list && list.map((item, index) => (
                  <p>{item.firstname                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }</p>
                ))
              ) : null
            } */}
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