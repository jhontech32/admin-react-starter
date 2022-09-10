import React from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'
import {
  Item,
  Picker,
  Text,
  View
} from 'native-base'
import { Dropdown, MultiSelect } from 'react-native-element-dropdown'

import color from 'theme/color'

const styles = StyleSheet.create({
  column: {
    width: '100%',
    paddingVertical: 5
    // minHeight: 60,
    // flex: 1,
  },
  // item: {
  //   flex: 1,
  //   backgroundColor: color.textIcons,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 20,
  //   paddingVertical: 5,
  //   borderRadius: 10,
  //   minHeight: 50,
  //   maxHeight: 50
  // },
  dropdown: {
    backgroundColor: color.textIcons,
    marginTop: 20
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18
  },
  item: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textItem: {
    flex: 1,
    fontSize: 16
  },
  label: {
    paddingLeft: 5,
    paddingBottom: 10,
    color: color.primaryColor
  },
  error: {
    textAlign: 'right',
    color: color.errorColor
  }
})

const _renderItem = (item) => {
  return (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.value}</Text>
      <Image style={styles.icon} source={item.image} />
    </View>
  )
}

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
  console.log('input', input)
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
        <Dropdown
          style={styles.dropdown}
          data={data}
          // search
          // searchPlaceholder="Search"
          valueField={`${input.value}`}
          placeholder={input.value.value || placeholder}
          values={`${input.value}`}
          selectedValue={`${input.value}`}
          onChange={(event) => {
            console.log('event', event)
            if (onChange) {
              onChange(event)
            }
            input.onChange(event)
          }}
          {...input}
          renderItem={item => _renderItem(item)}
        />
      </Item>
      {error && touched && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default renderDropdown
