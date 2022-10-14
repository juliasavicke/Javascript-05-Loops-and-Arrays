"use strict";
console.log("main.js");

function uzd20() {
  let min = 5;
  let max = 10;
  let rez = 1;
  for (let i = min; i <= max; i++) {
    rez = rez * i;
    console.log(rez);
  }
  console.log("rez: ", rez);
}
uzd20();
