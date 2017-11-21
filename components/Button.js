import React from 'react'
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lpink } from '../utils/colors'

// This dsplay the button at different locations
export default function Button ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.container, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
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
