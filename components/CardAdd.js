import React,{Component} from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import {lpink} from '../utils/colors'

class CardAdd extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add card</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:lpink,
  },
})

export default CardAdd
