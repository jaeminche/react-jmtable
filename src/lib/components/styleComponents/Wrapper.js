/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  /* height: 100%; */
  height: '70vh';
  overflow-y: auto;

  table {
    ${props =>
      !props.widthAuto &&
      css`
        width: 100%;
      `}

    td {
      max-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      padding-left: 3px;
      padding-right: 3px;
    }
  }
`;

const TableWrapper = props => {
  const { widthAuto } = props;

  const { children } = props;
  return (
    <Wrapper
      id={'myDiv'}
      widthAuto={widthAuto}
    >  
      {children}
    </Wrapper>
  );
};

export default TableWrapper;
