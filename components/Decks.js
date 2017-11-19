import React,{Component} from 'react';
import { StyleSheet, Text, View ,Platform,TouchableOpacity} from 'react-native';
import {gray,white,lblack,lpink} from '../utils/colors';

// This Display the card title and card length i.e. Number of question present in that card
class Decks extends Component {
  render(){
    const {deck}=this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.ctitle}>{deck.title}</Text>
        <Text style={styles.detail}>{deck.questions.length}  cards</Text>
      </View>
    )
  }
}
//  Styles on card and card detail and "deck" tab.
const styles = StyleSheet.create({
  container:{
    backgroundColor:lblack,
    borderBottomColor: white,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    justifyContent:'flex-start',
  },
  ctitle:{
    fontSize:30,
    paddingLeft:20,
    paddingBottom:10,
    paddingTop:10,
    color:white,
  },
  detail:{
    color:lpink,
    paddingLeft:20,
  }
});

export default Decks
