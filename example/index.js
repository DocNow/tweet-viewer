// in your project you'll import from 'tweet-viewer'
import TweetViewer from '../src/TweetViewer.js'

ReactDOM.render(
  <TweetViewer 
    tweetIds={TWEET_VIEWER_DATA.ids}
    metadata={TWEET_VIEWER_DATA.metadata}/>,
  document.getElementById('root'));
