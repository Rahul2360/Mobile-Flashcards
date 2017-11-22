import React, {Component} from 'react';
import { StyleSheet, Text, View ,Platform,TouchableOpacity,TextInput} from 'react-native';
import {lblack,white,lpink,lblue} from '../utils/colors';
import {getDecks,getDeck,saveDeckTitle} from '../utils/api'
import Button from '../components/Button'

// It display the new deck tab data
class NewDeck extends Component {
  // Follwong function add a new deck in the stack.
  submit = () => {
      if(this.state.data){
        saveDeckTitle(this.state.data).then(() => {
          getDeck(this.state.data).then((deck) => {
            this.props.navigation.navigate(
              'Details',
              {deck,refresh:this.refreshDeck}
            )
          })
        })
      }
  }
  // It refreshes the decks
  refreshDeck =() => {
    getDecks().then((deckArray)=> {
      if (deckArray) {
          this.setState({
           deckArray: JSON.parse(deckArray)
          })
        }
    })
  }
  render(){
    return(
      <View style={styles.head}>
          <Text style={styles.title}>Title</Text>
          <TextInput style={styles.input} onChangeText={(data) => this.setState({data})}></TextInput>
          <Button style={styles.submit} onPress={this.submit}>Submit</Button>
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
  },
  title:{
    textAlign: 'center',
    fontSize:20,
    color:white,
    paddingBottom:10,
  },
  input: {
    height:50,
    backgroundColor:lblack,
    borderColor:lpink,
    borderWidth:2,
    color:white,
    marginLeft:10,
    marginRight:10,
    paddingLeft:10,
    fontSize:15
  },
  submit:{
    backgroundColor:lblue,
    paddingTop:10,
  }
});

export default NewDeck
