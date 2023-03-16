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

export const CheckBox = React.memo(
  ({
    id = 'chk',
    labelText = '',
    value,
    idx,
    toggleAll,
    handleCheckedItemIndexes,
    ...props
  }) => {
    const [checked, setChecked] = useState(value);

    useEffect(() => {
      setChecked(toggleAll);
    }, [toggleAll]);

    const handleChecked = useCallback(() => {
      if (!handleCheckedItemIndexes) {
        return null;
      }
      setChecked(!checked);
      handleCheckedItemIndexes(idx);
    }, [checked, handleCheckedItemIndexes]);

    return (
      <Wrapper>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChecked}
          {...props}
        />
        <label htmlFor={id} className="cursor-pointer">
          {checked ? <img src={CHECK_YES} /> : <img src={CHECK_NO} />}
          {labelText}
        </label>
      </Wrapper>
    );
  },
);
