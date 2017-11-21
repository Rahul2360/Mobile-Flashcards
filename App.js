import React from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import { purple, white,red,lightBlue } from './utils/colors';
import Deck from './components/Deck';
import NewDeck from './components/NewDeck';

/*function deck() {
    return (
        <View style={styles.head}>
            <Text>Deck</Text>
        </View>
    )
}*/

/*function newDeck() {
    return (
        <View style={styles.head}>
            <Text>New Deck</Text>
        </View>
    )
}*/

const Tabs = TabNavigator({
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

const MainNavigator = StackNavigator({
   Main:{
     screen:Tabs,
   },

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
