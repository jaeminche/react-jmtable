function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  return /*#__PURE__*/React.createElement(TBody, null, myForm?.map((rowD, idx) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: idx,
      onClick: onClickOnDetail ? () => onClickOnDetail(rowD) : null,
      className: focusedUserUuid === rowD['uuid'] || focusedSerialNo === rowD['serialNumber'] ? 'bg-red-50' : onClickOnDetail ? 'hover:bg-gray-200 cursor-pointer' : ''
    }, tBodyCols.map((tdKey, idx1) => {
      return /*#__PURE__*/React.createElement("td", {
        key: idx1,
        width: tableHeader[idx1].width
      }, tdKey === 'mod' ? /*#__PURE__*/React.createElement(ModBtn, _extends({
        idx: idx,
        rowD: rowD
      }, rest)) : tdKey === 'del' ? /*#__PURE__*/React.createElement(DelBtn, _extends({
        idx: idx
      }, rest)) : tdKey === 'check' ? /*#__PURE__*/React.createElement("div", {
        className: "flex justify-center items-center"
      }, /*#__PURE__*/React.createElement(CheckBox2, {
        id: `Chk${idx}`,
        value: rowD.check,
        onChange: () => props.chkClick(idx)
      })) : tdKey === 'no' ? idx + 1 : tdKey.includes('DateTime') ? rowD[tdKey] && new Date(rowD[tdKey]).format('yyyy-MM-dd HH:mm') : tdKey === 'price' || tdKey === 'balance' ? /*#__PURE__*/React.createElement("span", {
        className: "float-right mr-2"
      }, Number(rowD[tdKey])?.setComma()) : tdKey === 'tooltip' ? /*#__PURE__*/React.createElement("span", {
        className: "tooltip",
        title: rowD[tdKey]
      }, rowD[tdKey]) : /*#__PURE__*/React.createElement("span", {
        className: 'text-red-500'
      }, rowD[tdKey]));
    }));
  }), myForm?.length > 0 ? '' : /*#__PURE__*/React.createElement("tr", {
    className: ""
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: 20
  }, "No data to display")));
};
export default TableSection;