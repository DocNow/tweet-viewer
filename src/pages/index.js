import React, { Component } from 'react'
import { graphql } from "gatsby"
import TweetEmbed from 'react-tweet-embed'

export default class Index extends Component {
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

  render () {
    const tweets = this.props.data.allDocnowTweetid.edges
    return (<div id="docnow__scv">{
      tweets.slice(0, this.state.postsToShow).map(({node}, i) => {
        return (<TweetEmbed
          key={`t${i}`}
          id={node.id}
          options={{cards: 'hidden'}} />)
      })
    }</div>)
  }
}

export const query = graphql`
  query { 
    allDocnowTweetid {
      edges {
        node {
          id
        }
      }
    }    
  }
`
