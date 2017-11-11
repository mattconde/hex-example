import React, { Component } from 'react';
import styled from 'styled-components';
import Game from '../../../game';

const Wrapper = styled.div``;

export default class World extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.game = new Game();
  }
  componentWillUnmount() {
    // figure out how to tear it down nicely
    // and get all state from it hope fully... if any
  }
  render() {
    return (
      <Wrapper>
        <h2>hello world</h2>
        <div id="game" />
      </Wrapper>
    );
  }
}
