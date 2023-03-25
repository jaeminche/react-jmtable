/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DelBtn, EvtBtn } from '../button/ButtonWithData';
import { CheckBox } from '../CheckBox';
import { isDateFormat } from '../../../utils/helper';

const TBody = styled.tbody`
  border: 1px solid var(--border-color);
  td {
    min-width: 30px;
    border: 1px solid var(--border-color);
  }
`;

const StyledTr = styled.tr`
  text-align: center;
`;

const MemoizedTableRow = React.memo(props => {
  const {
    rowD,
    tableHeader,
    focusedUserUuid = null,
    focusedSerialNo = null,
    onClickOnDetail = null,
    idx,
    handleCheckedRowIndexes,
    ...rest
  } = props || {};
  const tBodyCols = tableHeader?.map(item => item.key);

  return (
    <StyledTr
      key={idx}
      onClick={onClickOnDetail ? () => onClickOnDetail(rowD) : null}
      className={
        focusedUserUuid === rowD['uuid'] ||
        focusedSerialNo === rowD['serialNumber']
          ? 'bg-red-50'
          : onClickOnDetail
          ? 'hover:bg-gray-200 cursor-pointer'
          : ''
      }
    >
      {tBodyCols.map((tdKey, idx1) => {
        const { type: colDataType, label: colDataLabel } = tableHeader[idx1];
        return (
          <td key={idx1} width={tableHeader[idx1].width}>
            {colDataType === 'evtBtn' ? (
              <EvtBtn idx={idx} rowD={rowD} label={colDataLabel} {...rest} />
            ) : colDataType === 'del-x-box' ? (
              <DelBtn idx={idx} label={colDataLabel} {...rest} />
            ) : colDataType === 'checkbox' ? (
              <div className="flex justify-center items-center">
                <CheckBox
                  checkboxid={`Chk${idx}`}
                  value={rowD.check}
                  idx={idx}
                  toggleAll={props.toggleAll}
                  handleCheckedRowIndexes={handleCheckedRowIndexes}
                />
              </div>
            ) : colDataType === 'no' ? (
              <span className="text-center">{idx + 1}</span>
            ) : colDataType === 'number' ? (
              <span className="float-right mr-2">
                {Number(rowD[tdKey])?.setComma()}
              </span>
            ) : colDataType === 'date' &&
              rowD[tdKey] &&
              isDateFormat(rowD[tdKey]) ? (
              new Date(rowD[tdKey]).format('yyyy-MM-dd HH:mm')
            ) : (
              rowD[tdKey]
            )}
          </td>
        );
      })}
    </StyledTr>
  );
});

const TableSection = props => {
  const { myForm, ...rest } = props;

  return (
    <TBody>
      {myForm?.map((rowD, idx) => {
        return <MemoizedTableRow key={idx} rowD={rowD} idx={idx} {...rest} />;
      })}
      {myForm?.length > 0 ? (
        ''
      ) : (
        <tr>
          <td colSpan={20}>No data to display</td>
        </tr>
      )}
    </TBody>
  );
};

export default React.memo(TableSection);
