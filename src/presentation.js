import React from "react"

import { Deck } from 'spectacle'

import theme from './theme'

import slides from './slides'

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transitionDuration={500}
        theme={theme}
      >
      {slides}
      </Deck>
    );
  }
}
