import React from 'react'

import Main from '../../Main'
import Content from './Content'

const Detail = (props) => {
  return (
    <Main
      component={
        <Content props={props} />
      }
    />
  )
}

export default Detail