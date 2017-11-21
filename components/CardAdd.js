import React,{Component} from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import {lpink,lblack,white} from '../utils/colors'

// Following display the cardadd button.
class CardAdd extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add card</Text>
      </View>
    )
  }
}

// Card add styles
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:lblack,
    padding:10
  },
  text:{
    color:white,
  }
})

export default CardAdd
