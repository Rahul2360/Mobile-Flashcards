import React, {Component} from 'react';
import { StyleSheet, Text, View ,Platform,TouchableOpacity} from 'react-native';
import {lblack,white,lpink,lightBlue} from '../utils/colors';
import Button from '../components/Button';

class Details extends Component {
  // This code is pick from the udacifitness app
  // This code display the heading of the page.
  static navigationOptions =({navigation}) => {
    const {deck} = navigation.state.params
    return{
      title:`${deck.title}`
    }
  }
  render(){
    // Following code Display the deck Details in which heading , length of card, and a button is diplayed
    const {deck,refresh}= this.props.navigation.state.params;
    return(
      <View style={styles.container}>
        <Text style={styles.ctitle}>{deck.title}</Text>
        <Text style={styles.detail}>{deck.questions.length}  cards</Text>
        <Text></Text>
        <Button onPress={()=>this.props.navigation.navigate('CardAdd',{deck,refresh})}>Add Card</Button>
        <Button onPress={()=>this.props.navigation.navigate('Quiz',{deck})}>Start Quiz</Button>
      </View>
    )
  }
}
// Style of Details tab
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lblack,
    padding:20,
  },
  ctitle:{
    fontSize:30,
    padding:10,
    color:white,
    textAlign:'center',
    backgroundColor:lblack,
  },
  detail:{
    textAlign:'center',
    color:lpink,
    paddingLeft:20,
  }

});
export default Details
