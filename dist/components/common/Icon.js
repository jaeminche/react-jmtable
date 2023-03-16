/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
const IconStyled = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;

  img {
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
  }

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
const Icon = ({
  src,
  alt,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(IconStyled, rest, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }));
};
export default Icon;