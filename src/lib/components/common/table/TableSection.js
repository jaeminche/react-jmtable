/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DelBtn, ModBtn } from '../button/ButtonWithData';
import { CheckBox } from '../CheckBox';
import { isDateFormat } from '../../../utils/helper';

const TBody = styled.tbody`
  border: 1px solid var(--border-color);
  td {
    min-width: 30px;
    border: 1px solid var(--border-color);
  }
`;

const ARow = props => {
  const {
    rowD,
    tableHeader,
    focusedUserUuid = null,
    focusedSerialNo = null,
    onClickOnDetail = null,
    idx,
    handleCheckedItemIndexes,
    ...rest
  } = props || {};
  const tBodyCols = tableHeader?.map(item => item.key);

  return (
    <tr
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
        return (
          <td key={idx1} width={tableHeader[idx1].width}>
            {tdKey === 'mod' ? (
              <ModBtn idx={idx} rowD={rowD} {...rest} />
            ) : tdKey === 'del' ? (
              <DelBtn idx={idx} {...rest} />
            ) : tdKey === 'checkbox' ? (
              <div className="flex justify-center items-center">
                <CheckBox
                  id={`Chk${idx}`}
                  value={rowD.check}
                  idx={idx}
                  toggleAll={props.toggleAll}
                  handleCheckedItemIndexes={handleCheckedItemIndexes}
                />
              </div>
            ) : tdKey === 'no' ? (
              idx + 1
            ) : tdKey === 'price' || tdKey === 'balance' ? (
              <span className="float-right mr-2">
                {Number(rowD[tdKey])?.setComma()}
              </span>
            ) : tdKey === 'createdAt' &&
              rowD[tdKey] &&
              isDateFormat(rowD[tdKey]) ? (
              new Date(rowD[tdKey]).format('yyyy-MM-dd hh:mm')
            ) : (
              rowD[tdKey]
            )}
          </td>
        );
      })}
    </tr>
  );
};
const MemoizedTableRow = React.memo(ARow);

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
        <tr className="">
          <td colSpan={20}>표시할 데이터가 없습니다</td>
        </tr>
      )}
    </TBody>
  );
};

export default React.memo(TableSection);
