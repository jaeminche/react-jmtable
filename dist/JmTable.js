function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react/prop-types */
import React from 'react';
import TableHead from './components/table/TableHead';
import TableWrapper from './components/styleComponents/Wrapper';
// Scss
import './style/scss/styles.scss';

// Prototype
import './utils/prototype';
import TableSection from './components/table/TableSection';
const JmTable = props => {
  const {
    tableHeader
  } = props || {};
  return /*#__PURE__*/React.createElement(TableWrapper, null, /*#__PURE__*/React.createElement("table", {
    width: props.tWidth ? props.tWidth : '100%',
    className: "text-sm"
  }, /*#__PURE__*/React.createElement(TableHead, {
    tableHeader: tableHeader
  }), props.myForm?.length > 0 ? /*#__PURE__*/React.createElement(TableSection, _extends({
    tableHeader: tableHeader
  }, props)) : /*#__PURE__*/React.createElement("tbody", {
    className: "border border-borderPrimary"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: tableHeader?.length
  }, "No data to display")))));
};
export default JmTable;