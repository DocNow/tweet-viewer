# tweet-viewer

*tweet-viewer* is a React component for viewing a tweet id dataset with infinite scroll. You can use it in your React application by installing:

    npm i tweet-viewer

Then you should be able to import the component:

```javascript
import TweetViewer from 'tweet-viewer'
```

Use the *TweetViewer* in your component's render function by passing in a *list* of tweet identifers:

```jsx
<TweetViewer tweetIds={ids} />,
```