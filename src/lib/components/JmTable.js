import React, { useCallback, useMemo } from 'react';
import TableHead from './common/table/TableHead';
import TableWrapper from './styleComponents/Wrapper';
import TableSection from './common/table/TableSection';
import {
  HEADER_PLACEHOLDER,
  SAMPLE_BODY,
  SAMPLE_HEADER,
} from '../constants/sampledata';

// Scss and css
import '../style/scss/styles.scss';
import '../index.css';

// Prototype
import '../utils/prototype';

const JmTable = ({
  showSampleData = false,
  tableHeader: _tableHeader,
  tableBody: _tableBody,
  customStyle,
  handleEvent,
  ...rest
}) => {
  const { tableWidth } = customStyle || {};

  const tableHeader = useMemo(() => {
    return showSampleData ? SAMPLE_HEADER : _tableHeader || HEADER_PLACEHOLDER;
  }, [showSampleData, _tableHeader]);

  const tableBody = useMemo(() => {
    return showSampleData ? SAMPLE_BODY : _tableBody || [];
  }, [showSampleData, _tableBody]);

  const _handleEvent = useCallback(handleEvent, []);

  return (
    <TableWrapper tableWidth={tableWidth || '100%'} style={customStyle}>
      <table>
        <TableHead tableHeader={tableHeader} />
        {tableBody?.length > 0 ? (
          <TableSection
            tableHeader={tableHeader}
            tableBody={tableBody}
            handleEvent={_handleEvent}
            {...rest}
          />
        ) : (
          <tbody>
            <tr>
              <td colSpan={tableHeader?.length} className="text-center">
                No data to display
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </TableWrapper>
  );
};

export default React.memo(JmTable);
