export function getMonth() {
  const currentDate = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentMonth = months[currentDate.getMonth()];
  return currentMonth;
}
