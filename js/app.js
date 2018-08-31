let date = new Date();
let day = date.getDay();  //Get the weekday as a number (0-6)
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dayOfWeek = daysOfWeek[day];
let hour = (date.getHours()> 12? (date.getHours()- 12):date.getHours());
let minute = date.getMinutes();
let second = date.getSeconds();
let meridiem = (hour >= 12)? " PM ":" AM ";

function displayToday(){
  const todaySpace = document.querySelector('.today');
  todaySpace.innerHTML = `Today is: ${dayOfWeek}. <br> Current time is : ${hour} ${meridiem} : ${minute} : ${second}`;}

displayToday();

