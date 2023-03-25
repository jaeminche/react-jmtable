/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
const Wrapper = styled.div`
  overflow-y: auto;

  table {
    width: ${props => props.tableWidth || '100%'};
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
  const {
    tableWidth
  } = props;
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement(Wrapper, {
    id: 'myDiv',
    tableWidth: tableWidth
  }, children);
};
export default TableWrapper;