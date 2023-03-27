/* eslint-disable react/prop-types */
import React from 'react';
import ICON_DEL_BTN from '../../../assets/icon/delete.png';
import Icon from '../Icon';
import Button from './Button';

const EvtBtn = React.memo(props => {
  const { handleEvent = null, idx, tableId = '', label = 'Mod' } = props;
  return (
    <label htmlFor={`${tableId}-evtBtn-${idx}`}>
      <Button>{label}</Button>
      <input
        onClick={handleEvent}
        readOnly
        id={`${tableId}-evtBtn-${idx}`}
        value={idx}
        style={{ display: 'none' }}
      />
    </label>
  );
});

const DelBtn = React.memo(props => {
  const { handleDel = null, idx, tableId } = props;

  return (
    <label htmlFor={`${tableId}-delBtn-${idx}`}>
      <Icon src={ICON_DEL_BTN} width="10px" height="10px" alt="delete button" />
      <input
        onClick={handleDel}
        readOnly
        id={`${tableId}-delBtn-${idx}`}
        value={idx}
        style={{ display: 'none' }}
      />
    </label>
  );
});

export { EvtBtn, DelBtn };
