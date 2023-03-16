/* eslint-disable react/prop-types */
import React from 'react';
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

export const CheckBox2 = ({
  id = 'chk',
  labelText = '',
  value,
  onChange,
  ...props
}) => {
  return (
    <Wrapper>
      <input
        type="checkbox"
        id={id}
        value={value}
        onClick={onChange}
        {...props}
      />
      <label htmlFor={id} className="cursor-pointer">
        {value ? <img src={CHECK_YES} /> : <img src={CHECK_NO} />}
        {labelText}
      </label>
    </Wrapper>
  );
};
