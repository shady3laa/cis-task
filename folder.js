let hourHand = document.querySelector('[data-hour-hand]')
let minuteHand = document.querySelector('[data-minute-hand]')
let secondHand = document.querySelector('[data-second-hand]')

function currentTime() {
  "use strict";
  const Today = new Date()
  const seconds = Today.getSeconds() /60;
  const minutes =(seconds + Today.getMinutes()) / 60 
  const  hours = (minutes + Today.getHours()) / 12

  setRotation(secondHand, seconds)
  setRotation(minuteHand, minutes)
  setRotation(hourHand, hours)

}

  setInterval(currentTime, 1000);
function setRotation(ele , rotationRatio) {
    ele.style.setProperty('--rotation', rotationRatio * 360)
}
