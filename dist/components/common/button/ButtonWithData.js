/* eslint-disable react/prop-types */
import React from 'react';
import ICON_DEL_BTN from '../../../assets/icon/delete.png';
import Icon from '../Icon';
import Button from './Button';
const EvtBtn = /*#__PURE__*/React.memo(props => {
  const {
    handleEvent = null,
    idx,
    tableId = '',
    label = 'Mod'
  } = props;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: `${tableId}-evtBtn-${idx}`
  }, /*#__PURE__*/React.createElement(Button, null, label), /*#__PURE__*/React.createElement("input", {
    onClick: handleEvent,
    readOnly: true,
    id: `${tableId}-evtBtn-${idx}`,
    value: idx,
    style: {
      display: 'none'
    }
  }));
});
const DelBtn = /*#__PURE__*/React.memo(props => {
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
    alt: "delete button"
  }), /*#__PURE__*/React.createElement("input", {
    onClick: handleDel,
    readOnly: true,
    id: `${tableId}-delBtn-${idx}`,
    value: idx,
    style: {
      display: 'none'
    }
  }));
});
export { EvtBtn, DelBtn };