import React, {Component} from 'react';
import { StyleSheet, Text, View ,Platform,TouchableOpacity} from 'react-native';
import {lblack,white} from '../utils/colors';

class NewDeck extends Component {
  render(){
    return(
      <View style={styles.head}>
          <Text style={styles.text}>New Deck</Text>
      </View>
    )
  }
}
// Style of new deck tab
const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor: lblack,
    paddingTop:20,
    paddingLeft:15,
  },
  text: {
    color:white,
    flex:1,
    fontSize:20,
  }
});
export default NewDeck
