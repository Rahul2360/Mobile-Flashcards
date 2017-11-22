import React, {Component} from 'react';
import { ScrollView,StyleSheet, Text, View ,Platform,TouchableOpacity} from 'react-native';
import {black,gray,lblack} from '../utils/colors';
import Decks from '../components/Decks';
import {getDecks} from '../utils/api'

// Questions list
class Deck extends Component {
  state ={}
  componentDidMount() {
    getDecks().then((deckArray) => {
      if(deckArray){
        this.setState({
          deckArray: JSON.parse(deckArray)
        })
      }
    })
  }

  /*state =
    {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    CSS: {
      title:'CSS',
      questions:[
        {
          question:'What is the full form of CSS?',
          answer:'Cascading style sheet'
        },
        {
          question:'What is use of CSS?',
          answer:'To define styles for your web pages'
        }
      ]
    }
  }*/
  render() {
    /*The Object.keys() method returns an array of a given object's own enumerable
     properties, in the same order as that provided by a for...in loop*/
     let deckArray =[];
     if (this.state.deckArray) {
            deckArray = Object.keys(this.state.deckArray);
          }
    return (
      /* Touchable opacity is a wrapper for making views respond properly to touches. On press down, the opacity of the
         wrapped view is decreased, dimming it.
         Opacity is controlled by wrapping the children in an Animated.View, which is added to the view hiearchy. Be aware
         that this can affect layout.*/
      <View style={styles.container}>
        <ScrollView>
        {deckArray.map((dtitle) => {
          return (
            <TouchableOpacity
              key={dtitle}
              onPress={()=>this.props.navigation.navigate(
                'Details',
                {deck:this.state.deckArray[dtitle]}
              )}
              >
               <Decks deck={this.state.deckArray[dtitle]}/>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      </View>
    )
  }
}
// Style of deck tab
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lblack,
  },
});
export default Deck
