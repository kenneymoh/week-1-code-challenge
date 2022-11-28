//  declare function for checking the speed and awarding demerit points
function speed() {
  let speed = prompt("Input speed");
  let demeritPoints = (speed - 70) / 5;

  if (speed <= 70) {
    console.log("Ok");
  } else if (demeritPoints <= 12) {
    console.log(`Point : ${demeritPoints}`);
  } else  {
    console.log("License suspended");
  }
}
speed();