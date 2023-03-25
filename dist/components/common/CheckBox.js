function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import CHECK_NO from '../../assets/icon/checkbox.png';
import CHECK_YES from '../../assets/icon/checkbox_checked.png';
const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  input {
    display: none;
  }
  label {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
`;
export const CheckBox = /*#__PURE__*/React.memo(({
  checkboxid = 'chk',
  labelText = '',
  value,
  idx,
  toggleAll,
  handleCheckedRowIndexes,
  ...props
}) => {
  const [checked, setChecked] = useState(value);
  useEffect(() => {
    setChecked(toggleAll);
  }, [toggleAll]);
  const handleChecked = useCallback(() => {
    if (!handleCheckedRowIndexes) {
      return null;
    }
    setChecked(!checked);
    handleCheckedRowIndexes(idx);
  }, [checked, handleCheckedRowIndexes]);
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: checkboxid,
    checked: checked || false,
    onChange: handleChecked
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: checkboxid,
    className: "cursor-pointer"
  }, checked ? /*#__PURE__*/React.createElement("img", {
    src: CHECK_YES
  }) : /*#__PURE__*/React.createElement("img", {
    src: CHECK_NO
  }), labelText));
});