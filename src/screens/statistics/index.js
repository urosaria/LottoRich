import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function StatisticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StatisticsScreen Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default StatisticsScreen
