/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { DelBtn, ModBtn } from '../common/button/ButtonWithData';
import { CheckBox2 } from '../common/CheckBox';

const TBody = styled.tbody`
  border: 1px solid var(--border-color);
  td {
    min-width: 30px;
    border: 1px solid var(--border-color);
  }
`;

const TableSection = props => {
  const {
    myForm,
    tableHeader,
    focusedUserUuid = null,
    focusedSerialNo = null,
    onClickOnDetail = null,
    ...rest
  } = props;
  const tBodyCols = tableHeader?.map(item => item.key);

  return (
    <TBody>
      {myForm?.map((rowD, idx) => {
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
                  ) : tdKey === 'check' ? (
                    <div className="flex justify-center items-center">
                      <CheckBox2
                        id={`Chk${idx}`}
                        value={rowD.check}
                        onChange={() => props.chkClick(idx)}
                      />
                    </div>
                  ) : tdKey === 'no' ? (
                    idx + 1
                  ) : tdKey.includes('DateTime') ? (
                    rowD[tdKey] &&
                    new Date(rowD[tdKey]).format('yyyy-MM-dd HH:mm')
                  ) : tdKey === 'price' || tdKey === 'balance' ? (
                    <span className="float-right mr-2">
                      {Number(rowD[tdKey])?.setComma()}
                    </span>
                  ) : tdKey === 'tooltip' ? (
                    <span className="tooltip" title={rowD[tdKey]}>
                      {rowD[tdKey]}
                    </span>
                  ) : (
                    <span className={'text-red-500'}>{rowD[tdKey]}</span>
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
      {myForm?.length > 0 ? (
        ''
      ) : (
        <tr className="">
          <td colSpan={20}>No data to display</td>
        </tr>
      )}
    </TBody>
  );
};

export default TableSection;
