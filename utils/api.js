import {AsyncStorage} from 'react-native';
const DECK_KEY = 'Flashcards:decks'

export function getDecks() {
  return AsyncStorage.getItem(DECK_KEY).then((output)=>{
      return output;
  })
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_KEY).then((output) => {
    const display = JSON.parse(output)
    return display[id];
  })
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_KEY,JSON.stringify({
    [title]:{
      title:[title],
      questions:[]
    }
  }))
}

export function addCardToDeck(title,card){
  return AsyncStorage.getItem(DECK_KEY).then((output) => {
    const display = JSON.parse(output)
    return AsyncStorage.mergeItem(DECK_KEY,JSON.stringify({
      [title]: {
        questions:[...display[title].questions,card]
      }
    }))
  })
}
