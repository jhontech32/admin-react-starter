import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View, Text, StyleSheet, Image
} from 'react-native'

import color from 'theme/color'

const styles = StyleSheet.create({
  wrapEmptyState: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyTitle: {
    fontSize: 13,
    marginVertical: 20,
    textAlign: 'center',
    color: color.secondaryText
  },
  emptyStatePic: {
    width: 180,
    height: 180
  }
})

class EmptyState extends Component {
  render () {
    const { picture, title, resize } = this.props

    return (
      <View style={styles.wrapEmptyState}>
        { picture && (<Image source={picture} resizeMode={resize || 'cover'} style={styles.emptyStatePic} />)}
        <Text style={styles.emptyTitle}>{title}</Text>
      </View>
    )
  }
}

EmptyState.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.object
}

EmptyState.defaulProps = {
  picture: false
}

export default EmptyState
