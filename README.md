<h1 align="center">Welcome to react-jmtable 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-jmtable" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-jmtable.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Get your data specification ready, your optimized table will pop up!

## Install

```sh
yarn add react-jmtable
```

## Usage

pass your data like this:

```sh

  const SAMPLE_HEADER = [
    { key: 'checkbox', label: '', type: 'checkbox', width: '4%' },
    { key: 'no', label: 'No', type: 'no', width: '6%' },
    { key: 'id', label: 'id', type: 'text', width: '8%' },
    { key: 'username', label: 'user name', type: 'text', width: '9%' },
    { key: 'tel', label: 'tel', type: 'tel', width: '9%' },
    { key: 'issuedAmount', label: 'issued amount', type: 'number', width: '14%' },
    { key: 'memo', label: 'memo', type: 'text', width: '8%' },
    { key: 'createdAt', label: 'created at', type: 'date', width: '8%' },
    { key: 'mod', label: 'Mod', type: 'button', width: '5%' },
    { key: 'del', label: 'del', type: 'del', width: '5%' },
  ];

  const SAMPLE_BODY = [{
    id: 1,
    username: 'Jae M. Choi',
    tel: 000-0000-0000,
    issuedAmount: 1000,
    memo: 'memo',
    mod: '',
    createdAt: new Date(),
  }];

  const { checkedIndexes, JmTable, tableBody } = useJmTable({
    // showSampleData: true,  // If you want to show sample data, set this to true
    tableHeader: SAMPLE_HEADER,
    tableBody: SAMPLE_BODY,
    customStyle: {
      tableWidth: '80%',
    },
  });

  return <div className="App">{JmTable}</div>;



```

## Author

👤 **Jae M. Choi**

- Github: [@jaeminche](https://github.com/jaeminche)
- LinkedIn: [@jaemchoi](https://linkedin.com/in/jaemchoi)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
