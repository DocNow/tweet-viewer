import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import TweetEmbed from 'react-tweet-embed'
import Metadata from './Metadata'

class App extends Component {
  constructor() {
    super()
    let postsToShow = 12

    this.state = {
      postsToShow,
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (distanceToBottom < 150) {
      this.setState({ postsToShow: this.state.postsToShow + 12 })
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
    window.postsToShow = this.state.postsToShow
  }

  render() {
    const tweets = this.props.tweetIds
    return (<div className="App">
      <Metadata metadata={this.props.metadata}/>
      <div>{
        tweets.slice(0, this.state.postsToShow).map((t, i) => {
          return (<TweetEmbed
            key={`t${i}`}
            id={t}
            options={{cards: 'hidden'}} />)
        })
      }</div>
    </div>)
  }
}

App.propTypes = {
  metadata: PropTypes.object.isRequired,
  tweetIds: PropTypes.array.isRequired
}

export default App;
