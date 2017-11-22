import React,{Component} from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import {lblack,white,lpink,red,green,dred} from '../utils/colors';
import Button from './Button';
import {clearLocalNotification,setLocalNotification} from '../utils/helper';

class Quiz extends Component {
  // This display the heading of the page
  static navigationOptions =({navigation}) => {
    return{
      title:`Quiz`
    }
  }
  /* Following are four states currentquestion = which question display on the screen
                                showquestion = This state display the question initially
                                showanswer = this state display the answer. initially answer is hidden
                                quizcomplete = this state is used for the completion of the quiz , initially quiz is not complete*/
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
// this function helps to get the next question of the question is InCorrect or correct and if all the questions are complete then ot display th score
nextquestion = (correct) => {
  const indexofnextquestion= this.state.currentquestion +1;
  if(!correct) {
    this.setState({
      score:this.state.score -1
    })
  }
  if(indexofnextquestion< this.state.questionslength){
    this.setState({
      currentquestion:indexofnextquestion,
    })
  }
  else {
    this.setState({
      quizcomplete:true,
    })
  //  clearLocalNotification().then(setLocalNotification)
  }
}
// Following function helps to restart the quiz
restart =() => {
  this.setState({
    currentquestion:0,
    quizcomplete:false,
    score:this.state.questionslength
  })
}
  render() {
    const{currentquestion,deck,quizcomplete,showquestion,showanswer,questionslength,score}=this.state;
    //const {display}={currentquestion+1}/{deck.questions.length};
    return (
      <View style={styles.container}>
        {deck && !quizcomplete && <View>
          <Text style={styles.size}>{currentquestion+1}/{deck.questions.length}</Text>
           {showquestion && <Text style={styles.heading}>{deck.questions[currentquestion].question}</Text>}
           {showquestion && <Button style={styles.button} onPress={this.flip}>Show Answer</Button>}
           {showanswer && <Text style={styles.heading}>{deck.questions[currentquestion].answer}</Text>}
           {showanswer && <Button style={styles.button} onPress={this.flip}>Show Question</Button>}
           <Button style={styles.correct} onPress={()=>this.nextquestion(true)}>Correct</Button>
           <Button style={styles.incorrect} onPress={()=>this.nextquestion(false)}>InCorrect</Button>
        </View>}
        {deck && quizcomplete && <View>
          <Text style={styles.score}>Score: {score} out of {questionslength}</Text>
          <Button onPress={this.restart}>Restart quiz</Button>
          <Button onPress={() => this.props.navigation.goBack()}>Back</Button>
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
  },
  correct:{
    backgroundColor:green,
    color:white,
  },
  incorrect:{
    backgroundColor:dred,
    color:white,
  },
  score:{
    color:white,
    fontSize:40,
    textAlign:'center',
  },
});

export default Quiz
