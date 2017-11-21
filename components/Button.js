import React from 'react'
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lpink } from '../utils/colors'

export default function Button ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: lpink,
    borderWidth: 1,
    borderColor: lpink,
    borderStyle: 'solid',
    borderRadius: 5,
    marginBottom: 15,
    padding: 10
  }
})
