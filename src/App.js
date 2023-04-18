import React, { useEffect } from 'react';
import {
  SAMPLE_HEADER,
  SAMPLE_BODY,
  HEADER_PLACEHOLDER,
} from './lib/constants/sampledata';
import useJmTable from './lib';

function App() {
  // for contributors: you can test useJmTable here.

  const [sampleAsyncHeader, setSampleAsyncHeader] =
    React.useState(HEADER_PLACEHOLDER);
  const [sampleAsyncBody, setSampleAsyncBody] = React.useState([]);

  const handleEvent = e => {
    console.log('mod button clicked', e);
  };

  const { checkedIndexes, JmTable, tableBody } = useJmTable({
    // showSampleData: true,  // If developer wants to show sample data, set this to true
    tableHeader: sampleAsyncHeader, // for testing async data
    tableBody: sampleAsyncBody, // for testing async data
    customStyle: {
      tableWidth: '80%',
      tableBody: {
        // background: 'lightBlue',
      },
    },
    handleEvent: {
      mod: handleEvent,
      mod1: handleEvent,
      del: handleEvent,
    },
  });

  useEffect(() => {
    // for testing async data
    const timer = setTimeout(function () {
      setSampleAsyncHeader(SAMPLE_HEADER);
      setSampleAsyncBody(SAMPLE_BODY);
    }, 1000);

    return () => {
      // return clearTimeout(timer);
    };
  }, []);

  return <div className="App">{JmTable}</div>;
}

export default App;
