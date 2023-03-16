import React, { useCallback, useEffect, useState } from 'react';
import JmTable from '../components/JmTable';

export const CheckedItemIndexesContext = React.createContext();

const JmTableContainer = props => {
  const [checkedItemIndexes, setCheckedItemIndexes] = useState([]);

  useEffect(() => {
    console.log('====0000', checkedItemIndexes, setCheckedItemIndexes);
  }, [checkedItemIndexes]);

  const handleCheckedItemIndexes = useCallback(idx => {
    setCheckedItemIndexes(prev => {
      if (Array.isArray(idx)) {
        return idx;
      }
      const newCheckedIndexes = new Set(prev);
      if (newCheckedIndexes.has(idx)) {
        newCheckedIndexes.delete(idx);
      } else {
        newCheckedIndexes.add(idx);
      }
      return Array.from(newCheckedIndexes).sort((a, b) => a - b);
    });
  }, []);

  return (
    <CheckedItemIndexesContext.Provider value={{ checkedItemIndexes }}>
      <JmTable handleCheckedItemIndexes={handleCheckedItemIndexes} {...props} />
    </CheckedItemIndexesContext.Provider>
  );
};

export default JmTableContainer;
