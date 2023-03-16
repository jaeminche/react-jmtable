import React from 'react';
import JmTable from './lib/JmTable';

function App() {
  return (
    <div className="App">
      <JmTable tableHeader={[
        { key: 'no', label: 'No', width: '6%' },
        { key: 'id', label: 'id', width: '8%' },
        { key: 'price', label: 'price', width: '9%' },
        { key: 'amount', label: 'amount', width: '9%' },
        { key: 'date', label: 'date', width: '14%' },
        { key: 'status', label: 'status', width: '8%' },
        { key: 'period', label: 'period', width: '8%' },
        { key: 'serialNumber', label: 'serialNo', width: '16%' },
        { key: 'return', label: 'retun', width: '8%' },
        { key: 'del', label: 'del', width: '5%' },
      ]} myForm={[{
        id: '102',
        col1: '',
        price: 0,
        amount: 0,
        date: new Date().format('yyyy-MM-dd'),
        status: '',
        period: '',
        serialNumber: '',
        return: true,
      }]} />
    </div>
  );
}

export default App;
