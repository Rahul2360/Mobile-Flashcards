import React, {Component} from 'react';
import { StyleSheet, Text, View ,Platform,TouchableOpacity} from 'react-native';
import {lblack,white,lpink} from '../utils/colors';
import Button from '../components/Button';

class Details extends Component {
  // This code is pick from the udacifitness app
  static navigationOptions =({navigation}) => {
    const {deck} = navigation.state.params
    return{
      title:`${deck.title}`
    }
  }
  render(){
    const deck= this.props.navigation.state.params.deck;
    return(
      <View style={styles.container}>
        <Text style={styles.ctitle}>{deck.title}</Text>
        <Text style={styles.detail}>{deck.questions.length}  cards</Text>
        <Button onPress={()=>this.props.navigation.navigate('AddCard')}>Add Card</Button>
      </View>
    )
  }
}
// Style of Details tab
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lblack,
    paddingTop:20,
    paddingLeft:15,
  },
  ctitle:{
    fontSize:30,
    paddingLeft:20,
    paddingBottom:10,
    paddingTop:10,
    color:white,
    textAlign:'center',
  },
  detail:{
    textAlign:'center',
    color:lpink,
    paddingLeft:20,
  }

});
export default Details
