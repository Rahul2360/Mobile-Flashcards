import React from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import { purple, white,red,lightBlue,lblack} from './utils/colors';
import Deck from './components/Deck';
import NewDeck from './components/NewDeck';
import Details from './components/Details';
import CardAdd from './components/CardAdd';
import Quiz from './components/Quiz';

const Tabs = TabNavigator({
  // Following code is similar to the udacifitness app
    Deck:{
        screen:Deck,
        navigationOptions: {
            tabBarLabel: 'DECK',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={40} color={tintColor} />
          },
    },
    NewDeck:{
        screen:NewDeck,
        navigationOptions: {
           tabBarLabel: 'NEW DECK',
           tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={40} color={tintColor} />
         },
    },
},
  // Following are the tab options and navigationOptions.
    {
   navigationOptions: {
     header: null
   },
   tabBarOptions: {
     activeTintColor: Platform.OS === 'android' ? white : lightBlue,
     style: {
       height: 56,
       backgroundColor: Platform.OS === 'android' ? lightBlue : white,
       shadowColor: 'rgba(0, 0, 0, 0.24)',
       shadowOffset: {
         width: 0,
        height: 3
       },
      shadowRadius: 6,
       shadowOpacity: 1
     }
   }
})

// Following is the main screen of the app.
const MainNavigator = StackNavigator({
   Main:{
     screen:Tabs,
   },
   Details: {
     screen:Details,
     navigationOptions: {
       headerTintColor: white,
       headerStyle: {
         backgroundColor:lblack,
       }
     }
   },
   CardAdd: {
     screen:CardAdd,
     navigationOptions: {
       headerTintColor: white,
       headerStyle: {
         backgroundColor:lblack,
       }
     }
   },
   Quiz: {
     screen:Quiz,
     navigationOptions: {
       headerTintColor: white,
       headerStyle: {
         backgroundColor:lblack,
       }
     }
   }
 })


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
