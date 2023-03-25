/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  margin: 0 auto;

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
    min-height: 30px;
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
  const { isSubmit, className, type, onClick, children, ...rest } = props;

  return (
    <StyledButton
      className={className + 'inline-flex justify-center'}
      type={type}
    >
      {type === 'file' ? (
        <label htmlFor="fileUpload">
          <input
            id="fileUpload"
            type="file"
            multiple
            style={{ display: 'none' }}
            accept="*.*"
            onChange={onClick}
          />
          <div {...rest} />
        </label>
      ) : isSubmit ? (
        <button onClick={onClick} className={className} {...rest}>
          {children}
        </button>
      ) : (
        <div
          onClick={onClick}
          className={
            'not-submit-but-box ' +
            className +
            ` ${rest.disabled ? 'disabled' : ''}`
          }
          {...rest}
        >
          {children}
        </div>
      )}
    </StyledButton>
  );
};
export default Button;
