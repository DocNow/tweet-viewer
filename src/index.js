import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import docnowData from './data/data'

ReactDOM.render(
  <App 
    tweetIds={docnowData.ids}
    metadata={docnowData.metadata}/>,
  document.getElementById('root'));
