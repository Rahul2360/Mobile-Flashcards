import React,{Component} from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import {lblack,white,lpink,red} from '../utils/colors';
import Button from './Button';

/* Following are four states currentquestion = which question display on the screen
                              showquestion = This state display the question initially
                              showanswer = this state display the answer. initially answer is hidden
                              quizcomplete = this state is used for the completion of the quiz */
class Quiz extends Component {
  state = {
    currentquestion:0,
    showquestion:true,
    showanswer:false,
    quizcomplete:false
  }

// score store the total rigth answer by the user
// questionslength store the total questions length.
componentDidMount(){
  const{deck}=this.props.navigation.state.params;
  this.setState({
    deck:deck,
    score:deck.questions.length,
    questionslength:deck.questions.length
  })
}

// this function helps to flip the card i.e. if questions is displayed initially then by clicking the button it flip the card and display the answer.
flip = () => {
  this.setState({
    showquestion: !this.state.showquestion,
    showanswer: !this.state.showanswer
  })
}
  render() {
    const{currentquestion,deck,quizcomplete,showquestion,showanswer}=this.state;
    //const {display}={currentquestion+1}/{deck.questions.length};
    return (
      <View style={styles.container}>
        {deck && !quizcomplete && <View>
          <Text style={styles.size}>{currentquestion+1}/{deck.questions.length}</Text>
           {showquestion && <Text style={styles.heading}>{deck.questions[currentquestion].question}</Text>}
           {showquestion && <Button style={styles.button} onPress={this.flip}>Show Answer</Button>}
           {showanswer && <Text style={styles.heading}>{deck.questions[currentquestion].answer}</Text>}
           {showanswer && <Button style={styles.button} onPress={this.flip}>Show Question</Button>}
        </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lblack,
    padding:10,
  },
  text:{
    color:white,
    fontSize:20,
  },
  size:{
    padding:15,
    color:lpink,
  },
  heading: {
    color:white,
    textAlign:'center',
    padding:10,
    fontSize:20,
  },
  button:{
    backgroundColor:red,
    color:white,
  }
});

export default Quiz
