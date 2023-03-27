function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  /* width: 3.5rem; */

  button,
  .not-submit-but-box,
  label {
    text-align: center;
    background-color: ${props => props.background || 'var(--main-color)'};
    color: white;
    padding: 4px 12px;
    border: none;
    cursor: pointer;
    font-size: var(--font-size-sm);
    text-transform: uppercase;
    transition: var(--transition);
    border: 1px solid var(--border-color);
    min-height: 15px;
    line-height: 20px;
    width: 110px;
    border-radius: 5px;

    &:hover {
      opacity: 0.8;
    }
  }

  label {
    display: flex;
    align-items: center;
    font-weight: 100;
    padding: 0.5rem 2rem;
    font-size: var(--font-size);
  }

  &.btn-sm button,
  &.btn-sm .not-submit-but-box {
    color: var(--white-color);
    padding: 0.5rem 2rem;
    font-weight: 100;
    font-size: var(--font-size);
  }

  &.btn-cancel button,
  &.btn-cancel .not-submit-but-box {
    padding: 0.5rem 2rem;
    font-weight: 100;
    font-size: var(--font-size);
    background: var(--white-color);
    color: var(--font-color);
  }

  button {
    div {
      height: 100%;
    }
  }

  .disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
const Button = props => {
  const {
    isSubmit,
    className,
    type,
    onClick,
    children,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(StyledButton, {
    type: type
  }, type === 'file' ? /*#__PURE__*/React.createElement("label", {
    htmlFor: "fileUpload"
  }, /*#__PURE__*/React.createElement("input", {
    id: "fileUpload",
    type: "file",
    multiple: true,
    style: {
      display: 'none'
    },
    accept: "*.*",
    onChange: onClick
  }), /*#__PURE__*/React.createElement("div", rest)) : isSubmit ? /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    className: className
  }, rest), children) : /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: 'not-submit-but-box ' + className + ` ${rest.disabled ? 'disabled' : ''}`
  }, rest), children));
};
export default Button;