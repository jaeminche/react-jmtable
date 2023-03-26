import React, { useCallback, useState } from 'react';
import JmTable from './components/JmTable';
// Scss
import './style/scss/styles.scss';

// Prototype
import './utils/prototype';

import './index.css';
// import './index.min.css';

const useJmTable = props => {
  const [checkedRowIndexes, setCheckedRowIndexes] = useState([]);

  const handleCheckedRowIndexes = useCallback(idx => {
    console.log('========= / file: useJmTable.js:11 / idx:', idx);
    setCheckedRowIndexes(prev => {
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

  return {
    checkedIndexes: checkedRowIndexes,
    JmTable: (
      <JmTable handleCheckedRowIndexes={handleCheckedRowIndexes} {...props} />
    ),
  };
};

export default useJmTable;
