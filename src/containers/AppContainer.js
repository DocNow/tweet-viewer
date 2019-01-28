import { connect } from 'react-redux'
import fetchTweetIds from '../actions'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    tweetIds: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    fetchTweetIds: () => {dispatch(fetchTweetIds())}
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer