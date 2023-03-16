/* eslint-disable no-unused-vars */
export const SAMPLE_HEADER = [
  { key: 'checkbox', label: '', width: '4%' },
  { key: 'no', label: 'No', width: '6%' },
  { key: 'id', label: 'id', width: '8%' },
  { key: 'username', label: 'user name', width: '9%' },
  { key: 'tel', label: 'tel', width: '9%' },
  { key: 'issuedAmount', label: 'issued amount', width: '14%' },
  { key: 'memo', label: 'memo', width: '8%' },
  { key: 'createdAt', label: 'created at', width: '8%' },
  { key: 'del', label: 'del', width: '5%' },
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
      createdAt: true,
    };
  });

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
