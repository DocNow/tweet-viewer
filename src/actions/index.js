export const REQUEST_TWEET_IDS = 'REQUEST_TWEET_IDS'
export const RECEIVE_TWEET_IDS = 'RECEIVE_TWEET_IDS'

export function requestTweetIds(fomat) {
  return {
    type: REQUEST_TWEET_IDS
  }
}

export function receiveTweetIds(text) {
  return {
    type: RECEIVE_TWEET_IDS,
    text,
    receivedAt: Date.now()
  }
}

function fetchTweetIds() {
  return dispatch => {
    dispatch(requestTweetIds())
    return fetch(`${process.env.PUBLIC_URL}/data/ids.csv`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.text()
      })
      .then(text => dispatch(receiveTweetIds(text)))
  }
}

export default fetchTweetIds;