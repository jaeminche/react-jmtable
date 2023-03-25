import React, { useEffect } from 'react';
import { SAMPLE_HEADER, SAMPLE_BODY } from './lib/constants/sampledata';
// import JmTableContainer from './lib/container/JmTableContainer';
import useJmTable from './lib/hook/useJmTable';

function App() {
  const { checkedIndexes, JmTable, myForm } = useJmTable({
    tableHeader: SAMPLE_HEADER,
    myForm: SAMPLE_BODY,
  });
  useEffect(() => {
    console.log(
      '==*******==',
      SAMPLE_HEADER,
      SAMPLE_BODY,
      checkedIndexes,
      myForm,
    );
  }, [checkedIndexes]);

  return <div className="App">{JmTable}</div>;
}

export default App;
