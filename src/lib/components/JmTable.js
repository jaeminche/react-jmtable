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
  const { tableHeader } = props || {};

  return (
    <TableWrapper>
      <table width={props.tWidth ? props.tWidth : '100%'} className="text-sm">
        <TableHead tableHeader={tableHeader} />
        {props.myForm?.length > 0 ? (
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

export default JmTable;
