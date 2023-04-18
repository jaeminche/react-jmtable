import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;

  table {
    font-size: 0.875rem;
    width: ${props => props.tableWidth};
    ${props => props.tableStyle && css(props.tableStyle)};
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
  const { tableWidth, style } = props;

  const { children } = props;
  return (
    <Wrapper id={'myDiv'} tableWidth={tableWidth} tableStyle={style.tableBody}>
      {children}
    </Wrapper>
  );
};

export default React.memo(TableWrapper);
