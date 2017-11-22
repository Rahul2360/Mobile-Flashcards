import React,{Component} from 'react';
import { StyleSheet, Text, View ,Platform,TextInput} from 'react-native';
import {lpink,lblack,white,lblue} from '../utils/colors'
import {addCardToDeck} from  '../utils/api'
import Button from '../components/Button'

// Following display the cardadd button.
class CardAdd extends Component {
state:{}
componentDidMount() {
  const {deck} = this.props.navigation.state.params;
  this.setState({
    deck
  })
}

  submit =() => {
    if(this.state.question){
      addCardToDeck(this.state.deck.title, {
        question:this.state.question
      }).then(()=>{this.props.navigation.navigate('Deck');
    });
    }
    if(this.state.answer){
      addCardToDeck(this.state.deck.title,{
        answer:this.state.answer
      }).then(()=>{this.props.navigation.navigate('Deck');
    });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add card</Text>
        <Text style={styles.questions}>Question</Text>
        <TextInput style={styles.qANDa} onChangeText={(question)=> this.setState({question})}></TextInput>
        <Text style={styles.answers}>Answer</Text>
        <TextInput style={styles.qANDa} onChangeText={(answer)=> this.setState({answer})}></TextInput>
        <Button style={styles.submit} onPress={this.submit}>Submit</Button>
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
    fontSize:20,
    textAlign:'center',
  },
  questions:{
    color:lpink,
    fontSize:15,
    paddingBottom:15,
  },
  answers: {
    color:lpink,
    fontSize:15,
    paddingTop:15,
    paddingBottom:15,
  },
  qANDa:{
    color:white,
    height:30,
    backgroundColor:lblack,
    borderColor:lpink,
    borderWidth:2,
    marginLeft:10,
    marginRight:10,
    paddingLeft:10,
    fontSize:15,
    marginTop:5
  },
  submit:{
    backgroundColor:lblue,
    paddingTop:10,
  }
})

export default CardAdd
