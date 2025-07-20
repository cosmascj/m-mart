import React from 'react'
import { StyleSheet, View } from 'react-native'

interface props {
    height?: number
}
export default function SizeBox({height = 10}:props) {
  return (
    <View style={{height: height}} />

  )
}

const styles = StyleSheet.create({})