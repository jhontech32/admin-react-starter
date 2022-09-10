import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Item,
  Picker,
  Text,
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
  item: {
    flex: 1,
    backgroundColor: color.textIcons,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    minHeight: 50,
    maxHeight: 50
  },
  input: {
    paddingLeft: 0,
    paddingRight: 0,
    padding: 0,
    minHeight: 40,
    height: '100%',
    width: '100%',
    fontSize: 16
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

const renderDropdown = ({
  input,
  title,
  placeholder,
  data,
  onChange,
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
        <Picker
          mode="dialog"
          placeholder={placeholder}
          placeholderStyle={styles.placeholder}
          placeholderIconColor={color.secondaryText}
          selectedValue={`${input.value}`}
          style={styles.input}
          textStyle={styles.inputText}
          iosHeader={placeholder}
          onValueChange={(event) => {
            if (onChange) {
              onChange(event)
            }
            input.onChange(event)
          }}
          {...input}
        >
          <Picker.Item style={styles.placeholder} value={null} label={placeholder} />
          {data.map((data, key) => <Picker.Item key={key} label={`${data.value}`} value={`${data.id}`} />)}
        </Picker>
      </Item>
      {error && touched && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default renderDropdown
