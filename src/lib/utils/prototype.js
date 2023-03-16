// eslint-disable-next-line no-extend-native
Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';
  const weekName = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

  let d = this;
  return f.replace(
    /(yyyy|yy|MM|M|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p|am\/pm|week)/gi,
    function ($1) {
      switch ($1) {
        case 'yyyy':
          return d.getFullYear(); // year (4letters)
        case 'yy':
          return (d.getFullYear() % 1000).zf(2); // year (2letters)
        case 'MM':
          return (d.getMonth() + 1).zf(2); // Month (2letters)
        case 'M':
          return d.getMonth() + 1; // Month (1letter)
        case 'dd':
          return d.getDate().zf(2); // Days (2letters)
        case 'HH':
          return d.getHours().zf(2); // hours (24hours, 2letters)
        case 'hh':
          return (d.getHours() > 12 ? d.getHours() - 12 : d.getHours()).zf(2); // hours (12hours, 2letters)
        case 'mm':
          return d.getMinutes().zf(2); // Minutes (2letters)
        case 'ss':
          return d.getSeconds().zf(2); // seconds (2letters)
        case 'am/pm':
          return d.getHours() < 12 ? 'AM' : 'PM';
        case 'a-kr/p-kr':
          return d.getHours() < 12 ? '오전' : '오후';
        case 'week':
          return weekName[d.getDay()]; // am/pm
        default:
          return $1;
      }
    },
  );
};
// eslint-disable-next-line no-extend-native
Date.prototype.clear = function () {
  this.setHours(0);
  this.setMinutes(0);
  this.setSeconds(0);
  this.setMilliseconds(0);
  return this;
};

// eslint-disable-next-line no-extend-native
Date.prototype.toDateFloat = function () {
  return this.clear() * 1;
};

Date.prototype.add = function (days = 0, months = 0, year = 0) {
  days !== 0 && this.setDate(this.getDate() + days);
  months !== 0 && this.setMonth(this.getMonth() + months);
  year !== 0 && this.setFullYear(this.getFullYear() + year);
  return this;
};

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

Date.prototype.startDate = function () {
  return new Date(new Date().setDate(1));
};

Date.prototype.formatKr = function () {
  return this.format('yyyy-MM-dd');
};

Date.prototype.getLastDay = function () {
  const date = new Date(this);
  date.setMonth(this.getMonth() + 1);
  date.setDate(0);

  return Number(date.format('dd'));
};

// eslint-disable-next-line no-extend-native
String.prototype.string = function (len) {
  let s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
// eslint-disable-next-line no-extend-native
String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};
// eslint-disable-next-line no-extend-native
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

// eslint-disable-next-line no-extend-native
Number.prototype.setComma = function () {
  return this.toLocaleString();
};
