var parseMonth = function(month) {
  if (month === 1) {
    return "January";
  } else if (month === 2) {
    return "February";
  } else if (month === 3) {
    return "March";
  } else if (month === 4) {
    return "April";
  } else if (month === 5) {
    return "May";
  } else if (month === 6) {
    return "June";
  } else if (month === 7) {
    return "July";
  } else if (month === 8) {
    return "August";
  } else if (month === 9) {
    return "September";
  } else if (month === 10) {
    return "October";
  } else if (month === 11) {
    return "November";
  } else if (month === 12) {
    return "December";
  }
};

var talkingCalendar = function(date) {
  // Your code here
  var components = date.split("/");

  var year = components[0];
  var month = parseInt(components[1], 10);
  var day = components[2];

  console.log(year, month, day);

  var monthString = parseMonth(month);

  console.log(monthString);
};

console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));
