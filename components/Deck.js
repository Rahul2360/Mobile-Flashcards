import React, {Component} from 'react';
import { ScrollView,StyleSheet, Text, View ,Platform,TouchableOpacity} from 'react-native';
import {black,gray,lblack} from '../utils/colors';
import Decks from '../components/Decks';
import {getDecks} from '../utils/api'

// Questions list by api.
class Deck extends Component {
  //initially  state is empty so there is no deck in the stack initially
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
  // This function is used for the refreshing of the decks . It is similar to the initial stage.
  refreshDeck =() => {
    getDecks().then((deckArray)=> {
      if (deckArray) {
          this.setState({
           deckArray: JSON.parse(deckArray)
          })
        }
    })
  }

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
                {deck:this.state.deckArray[dtitle],refresh:this.refreshDeck}
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
