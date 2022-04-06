const display = document.getElementById('stopwatch');
const buttons = document.getElementById('buttons')
// Setting up variables
var show = true;
var hour = 0;
var min = 0;
var sec = 0;
var time = false;
// Defining the functions for all three buttons
function startTime() {
  if (time == false) { // To avoid buffering
        time = true;
        run();
    }
}
function stopTime() {
  if (time == true) {
    time = false;
  }
}
function resetTime() {
  display.innerHTML = "00:00:00";
  time = false;
  hour = 0;
  sec = 0;
  min = 0;
}
function run() { // Setting up the time feature
    if (time == true) {
      sec = parseInt(sec); // Again just for logic safety
      min = parseInt(min);
      hour = parseInt(hour);

      sec = sec + 1;

      if (sec == 60) {
        min = min + 1;
        sec = 0;
      }
      if (min == 60) {
        hour = hour + 1;
        min = 0;
        sec = 0;
      }

      if (sec < 10) {
        sec = '0' + sec;
      }
      if (min < 10) {
        min = '0' + min;
      }
      if (hour < 10) {
        hour = '0' + hour; 
      }

      display.innerHTML = hour + ':' + min + ':' + sec;
      setTimeout("run()", 1000); // Works per second (1000 ms) == 1 sec
    }
}

// Stream Mode
function streamMode(){
    window.api.send("stream");
    buttons.style.display = 'none';
}
function returnMode(){
    window.api.send("return");
    buttons.style.display = 'block';
}