import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BaseOption = styled.li`
  padding: 0;
  margin: 0;
  position: relative;
  user-select: none;
  margin-bottom: 50px;
  left: 25%;
  width: 50%;
  padding: 1em 4em;
  text-align: center;
  letter-spacing: 1.2px;
  &:first-child {
    margin-top: 50px;
  }
`;

const TitleOption = BaseOption.extend`
  font-size: 2em;
`;

const Options = BaseOption.extend`
  top: 0;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  border: 1px solid ${props => props.theme.colors.blue};
  box-shadow: 0 3px 0 0 ${props => darken(0.1, props.theme.colors.blue)};
  text-shadow: 0 2px 0 ${props => darken(0.1, props.theme.colors.blue)};
  transition: all 0.1s ease;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${props => darken(0.1, props.theme.colors.blue)};
  }
  &:active {
    top: 3px;
    box-shadow: 0 0 0 0 ${props => darken(0.1, props.theme.colors.blue)};
  }
`;

export default props => (
  <Wrapper>
    <TitleOption>KSIR</TitleOption>
    <Options onClick={() => props.transitionView('world')}>Start</Options>
    <Options onClick={() => props.transitionView('options')}>Options</Options>
  </Wrapper>
);
