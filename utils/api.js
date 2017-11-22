import {AsyncStorage} from 'react-native';
const DECK_STORAGE_KEY = 'FlashCards:decks'

//Following are the four disfferent helper method that are given by the udacity

// This helper return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((output)=>{
      return output;
  })
}

// This helper take in a single id argument and return the deck associated with that id.
export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((output) => {
    const display = JSON.parse(output)
    return display[id];
  })
}

// This helper take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify({
    [title]:{
      title:[title],
      questions:[]
    }
  }))
}

// This helper take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(title,card){
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((output) => {
    const display = JSON.parse(output)
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify({
      [title]: {
        questions:[...display[title].questions,card]
      }
    }))
  })
}
