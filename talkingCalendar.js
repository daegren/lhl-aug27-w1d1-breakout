var talkingCalendar = function(date) {
  // Your code here
  var components = date.split("/");

  var year = components[0];
  var month = parseInt(components[1], 10);
  var day = components[2];

  console.log(year, month, day);

  var monthString;
  if (month === 1) {
    monthString = "January";
  } else if (month === 2) {
    monthString = "February";
  } else if (month === 3) {
    monthString = "March";
  } else if (month === 4) {
    monthString = "April";
  } else if (month === 5) {
    monthString = "May";
  } else if (month === 6) {
    monthString = "June";
  } else if (month === 7) {
    monthString = "July";
  } else if (month === 8) {
    monthString = "August";
  } else if (month === 9) {
    monthString = "September";
  } else if (month === 10) {
    monthString = "October";
  } else if (month === 11) {
    monthString = "November";
  } else if (month === 12) {
    monthString = "December";
  }

  console.log(monthString);
};

console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));
