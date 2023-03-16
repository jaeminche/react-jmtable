/* eslint-disable react/prop-types */
import React from 'react';
import ICON_DEL_BTN from '../../../assets/icon/delete.png';
import Icon from '../Icon';
import Button from './Button';
const ModBtn = props => {
  const {
    handleMod = null,
    idx,
    tableId = ''
  } = props;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: `${tableId}-modBtn-${idx}`
  }, /*#__PURE__*/React.createElement(Button, {
    className: "w-14 !important"
  }, "Mod"), /*#__PURE__*/React.createElement("input", {
    onClick: handleMod,
    readOnly: true,
    id: `${tableId}-modBtn-${idx}`,
    value: idx,
    className: "hidden h-0 w-0"
  }));
};
const DelBtn = props => {
  const {
    handleDel = null,
    idx,
    tableId
  } = props;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: `${tableId}-delBtn-${idx}`
  }, /*#__PURE__*/React.createElement(Icon, {
    src: ICON_DEL_BTN,
    width: "10px",
    height: "10px",
    className: "flex justify-center",
    alt: "delete button"
  }), /*#__PURE__*/React.createElement("input", {
    onClick: handleDel,
    readOnly: true,
    id: `${tableId}-delBtn-${idx}`,
    value: idx,
    className: "hidden h-0 w-0"
  }));
};
export { ModBtn, DelBtn };