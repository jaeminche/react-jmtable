/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;

  table {
    font-size: 0.875rem;
    width: ${props => props.tableWidth};

    tbody {
      border: 1px solid ${props => props.theme.borderPrimary};
    }
    td {
      max-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      padding-left: 3px;
      padding-right: 3px;
    }
  }

  .text-center {
    text-align: center;
  }
`;

const TableWrapper = props => {
  const { tableWidth } = props;

  const { children } = props;
  return (
    <Wrapper id={'myDiv'} tableWidth={tableWidth}>
      {children}
    </Wrapper>
  );
};

export default React.memo(TableWrapper);
