/* eslint-disable no-unused-vars */
export const SAMPLE_HEADER = [
  { name: 'checkbox', label: '', type: 'checkbox', width: '4%' },
  { name: 'no', label: 'No', type: 'no', width: '6%' },
  { name: 'id', label: 'id', type: 'text', width: '8%' },
  { name: 'username', label: 'user name', type: 'text', width: '9%' },
  { name: 'tel', label: 'tel', type: 'tel', width: '9%' },
  {
    name: 'issuedAmount',
    label: 'issued amount',
    type: 'number',
    width: '14%',
  },
  { name: 'memo', label: 'memo', type: 'text', width: '8%' },
  { name: 'createdAt', label: 'created at', type: 'date', width: '8%' },
  { name: 'mod', label: 'Mod', type: 'button', width: '5%' },
  { name: 'mod1', label: 'Mod1', type: 'button', width: '5%' },
  { name: 'del', label: 'del', type: 'del', width: '5%' },
];

const phoneNumbers = genPhoneNumbers(2000);

export const SAMPLE_BODY = Array(2000)
  .fill()
  ?.map((_, index) => {
    return {
      id: `ID_2023-${index + 1}`,
      username: `Username_${index + 1}`,
      tel: phoneNumbers[index],
      issuedAmount: 1000,
      memo: 'memo',
      mod: '',
      mod1: '',
      createdAt: new Date(),
    };
  });

export const HEADER_PLACEHOLDER = [
  {
    name: 'no',
    label: 'No',
    type: 'no',
    width: '6%',
  },
  {
    name: 'id',
    label: 'id',
    type: 'text',
    width: '8%',
  },
];

function genPhoneNumbers(num) {
  let phoneNumbers = new Set();
  while (phoneNumbers.size < num) {
    let phoneNumber =
      '010' +
      Math.floor(Math.random() * 100000000)
        .toString()
        .padStart(8, '0');
    phoneNumbers.add(phoneNumber);
  }
  return Array.from(phoneNumbers);
}
