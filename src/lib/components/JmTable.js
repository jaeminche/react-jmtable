/* eslint-disable react/prop-types */
import React from 'react';
import TableHead from './common/table/TableHead';
import TableWrapper from './styleComponents/Wrapper';
// Scss
import '../style/scss/styles.scss';

// Prototype
import '../utils/prototype';

import TableSection from './common/table/TableSection';

const JmTable = props => {
  const {
    tableHeader,
    tableBody,
    customStyle: { tableWidth },
  } = props || {};
  // const { tableWidth } = customStyle || {};

  return (
    <TableWrapper tableWidth={tableWidth}>
      <table className="text-sm">
        <TableHead tableHeader={tableHeader} />
        {tableBody?.length > 0 ? (
          <TableSection tableHeader={tableHeader} {...props} />
        ) : (
          <tbody className="border border-borderPrimary">
            <tr>
              <td colSpan={tableHeader?.length}>No data to display</td>
            </tr>
          </tbody>
        )}
      </table>
    </TableWrapper>
  );
};

export default React.memo(JmTable);
