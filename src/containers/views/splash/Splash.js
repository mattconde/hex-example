import React, { Component } from 'react';
import styled from 'styled-components';
import { darken, radialGradient } from 'polished';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${props =>
    radialGradient({
      colorStops: [`${props.theme.colors.blue} 0%`, `${darken(0.2, props.theme.colors.blue)} 100%`],
      extent: 'farthest-corner at 45px 45px',
    })};
`;

const Title = styled.h1`
  font-size: 18em;
  word-wrap: break-word;
  margin: 4px;
`;

const duration = 750;

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashIndex: 0,
    };
  }
  componentDidMount() {
    this.splashInterval = setInterval(this.nextSplash, duration);
  }
  componentWillUnmount() {
    this.splashInterval && clearInterval(this.splashInterval);
    this.splashInterval = false;
  }
  nextSplash = element => {
    const { splashIndex } = this.state;
    const { transitionView } = this.props;
    if (splashIndex > 2) {
      transitionView('menu');
    }
    this.setState({ splashIndex: splashIndex + 1 });
  };
  render() {
    const { splashIndex } = this.state;
    let screen = 'ksir';
    if (splashIndex === 0) {
      screen = 'thatmatt<domain>';
    }
    if (splashIndex === 1) {
      screen = 'champistious<procreation>';
    }
    return (
      <Wrapper>
        <Title>{screen}</Title>
      </Wrapper>
    );
  }
}
