let date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let today = day + '/' + month + '/' + year;
let tomorrow = day + 1 + '/' + month + '/' + year;
let dayAfterTomorrow = day + 2 + '/' + month + '/' + year;

export const DAYS = [
  {id: 1, date: today, slots: 5},
  {id: 2, date: tomorrow, slots: 5},
  {id: 3, date: dayAfterTomorrow, slots: 5},
];

export const SLOTS = [
  {id: 1, date: '', time: '10AM-12PM'},
  {id: 2, date: '', time: '12PM-02PM'},
  {id: 3, date: '', time: '02PM-04PM'},
  {id: 4, date: '', time: '04PM-06PM'},
  {id: 5, date: '', time: '06PM-08PM'},
];
