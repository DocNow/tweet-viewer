# tweet-viewer

*tweet-viewer* is a React component for viewing a tweet id dataset with infinite scroll and metadata about the dataset.

You can use it in your React application by installing:

    npm i tweet-viewer

Then you should be able to import the component:

```javascript
import TweetViewer from 'tweet-viewer'
```

And then use the component in your render function by passing in a list of
tweet identifers and some metadata:

```jsx
<TweetViewer tweetIds={ids} metadata={metadata} />,
```