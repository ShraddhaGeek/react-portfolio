import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import uuid from 'uuid';

class Typing extends Component {
  static propTypes = {
    words: PropTypes.arrayOf(String).isRequired,
  }

  render() {
    const { words } = this.props;
    const n = words.map((word) => {
      return ([
        <span key={uuid()}>{word}</span>,
        <Typist.Backspace key={uuid()} count={word.length} delay={3000} />,
      ]);
    });

    return (
      <Typist
        key={uuid()}
        avgTypingDelay={80}
        stdTypingDelay={80}
        onTypingDone={() => this.forceUpdate()}
      >
        {n}
      </Typist>
    );
  }
}

export default Typing;
