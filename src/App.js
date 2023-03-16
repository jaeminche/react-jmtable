import React from 'react';
import { SAMPLE_BODY, SAMPLE_HEADER } from './lib/constants/sampledata';
import JmTableContainer from './lib/container/JmTableContainer';

function App() {
  return (
    <div className="App">
      <JmTableContainer tableHeader={SAMPLE_HEADER} myForm={SAMPLE_BODY} />
    </div>
  );
}

export default App;
