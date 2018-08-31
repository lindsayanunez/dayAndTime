
let date = new Date();
let day = date.getDay();  //Get the weekday as a number (0-6)
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dayOfWeek = daysOfWeek[day];
let hour = (date.getHours()> 12? (date.getHours()- 12):date.getHours());
let minute = date.getMinutes();
let second = date.getSeconds();


function displayToday(){
  const todaySpace =document.querySelector('.today');
  todaySpace.innerHTML = `Today is: ${dayofWeek}. Current time is : ${hour} AM : ${minute} : ${second}`;
}

