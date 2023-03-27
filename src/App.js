import React, { useEffect } from 'react';
import { SAMPLE_HEADER, SAMPLE_BODY } from './lib/constants/sampledata';
// import JmTableContainer from './lib/container/JmTableContainer';
import useJmTable from './lib';

function App() {
  const { checkedIndexes, JmTable, tableBody } = useJmTable({
    tableHeader: SAMPLE_HEADER,
    tableBody: SAMPLE_BODY,
    customStyle: {
      tableWidth: '80%',
    },
  });
  useEffect(() => {
    console.log(
      '==*******==',
      SAMPLE_HEADER,
      SAMPLE_BODY,
      checkedIndexes,
      tableBody,
    );
  }, [checkedIndexes]);

  return <div className="App">{JmTable}</div>;
}

export default App;
