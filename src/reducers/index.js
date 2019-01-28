import { RECEIVE_TWEET_IDS } from '../actions'

function tweetViewerApp(state = {tweets:[]}, action) {
  switch (action.type) {
    case RECEIVE_TWEET_IDS:
      const tweets = []
      for (const id of action.text.split(/[\r\n]+/)) {
        if (id === '') continue
        tweets.push(id)
      }
      return {tweets}
    default:
      return state
  }
}

export default tweetViewerApp;
