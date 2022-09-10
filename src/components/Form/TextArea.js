import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Text,
  Item,
  Textarea,
  View
} from 'native-base'
import color from 'theme/color'

const styles = StyleSheet.create({
  column: {
    paddingVertical: 5,
    minHeight: 60,
    flex: 1,
    flexDirection: 'column'
  },
  textArea: {
    paddingRight: 0,
    padding: 0,
    minHeight: 40,
    height: 300,
    paddingLeft: 5,
    width: '100%'
  },
  item: {
    flex: 1,
    backgroundColor: color.textIcons,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10
  },
  label: {
    fontSize: 16,
    paddingLeft: 5,
    paddingBottom: 10,
    color: color.primaryColor,
    fontWeight: 'bold'
  },
  error: {
    textAlign: 'right',
    color: color.errorColor
  }
})

const renderTextArea = ({
  input,
  title,
  placeholder,
  keyboardType = 'default',
  maxLength = 2000,
  autoFocus,
  multiline,
  height = 100,
  meta: {
    touched,
    error
  }
}) => {
  return (
    <View style={styles.column}>
      <Text style={styles.label}>
        {title}
      </Text>
      <Item
        regular
        style={styles.item}
        error={!!error && touched}
      >
        <Textarea
          selectTextOnFocus
          autoCorrect={false}
          autoFocus={autoFocus}
          style={[styles.textArea, { minHeight: height, maxHeight: height * 2 }]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={10}
          rowSpan={10}
          {...input}
        />
      </Item>
      {error && touched && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default renderTextArea
