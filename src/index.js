import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TweetViewer from './components/TweetViewer'

ReactDOM.render(
  <TweetViewer 
    tweetIds={TWEET_VIEWER_DATA.ids}
    metadata={TWEET_VIEWER_DATA.metadata}/>,
  document.getElementById('root'));
