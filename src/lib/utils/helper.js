/* eslint-disable no-unused-vars */
export function isDateFormat(str) {
  if (typeof str === 'number') return false;
  const date = new Date(str);
  return !isNaN(date);
}
