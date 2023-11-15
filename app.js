const clock = document.querySelector("#clock");

// Method 1
// setInterval(() => {
//   let time = new Date();
//   let hour = time.getHours() - 12;
//   let min = time.getMinutes();
//   let sec = time.getSeconds();
//   //   let milli = time.getMilliseconds();

//   clock.innerHTML = `${hour}:${min}:${sec}`;
// }, 1000);

// Method 2
setInterval(() => {
  let time = new Date().toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);
