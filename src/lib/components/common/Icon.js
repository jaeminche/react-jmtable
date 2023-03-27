/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const IconStyled = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
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

const Icon = ({ src, alt, ...rest }) => {
  return (
    <IconStyled {...rest}>
      <img src={src} alt={alt} />
    </IconStyled>
  );
};

export default Icon;
