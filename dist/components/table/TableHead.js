import React from 'react';
import styled from 'styled-components';
const Thead = styled.thead`
  position: sticky;
  top: 0;
  background: var(--table-head-color);
  border: 1px solid var(--border-color);
  z-index: 1;

  th {
    min-width: 30px;
    font-weight: normal;
    border: 1px solid var(--border-color);
  }

  :not(.not-scroll) {
    top: -0.5px;
  }
`;
const TableHead = props => {
  const {
    tableHeader,
    tableId,
    tableHeadClickEvent
  } = props || {};
  return /*#__PURE__*/React.createElement(Thead, null, /*#__PURE__*/React.createElement("tr", null, tableHeader.map((head, idx) => {
    return /*#__PURE__*/React.createElement("th", {
      key: `${tableId}-th-${idx}`,
      colSpan: head.colspan || '1',
      rowSpan: head.rowspan || '1',
      className: head.key === 'check' ? 'cursor-pointer' : '',
      onClick: tableHeadClickEvent,
      width: head.width
    }, head.label);
  })));
};
export default TableHead;