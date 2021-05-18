//L1: Set Alarm
function setAlarm(employed, vacation){
  let condition1 = employed && vacation === false;
  if(condition1){
    return true;
  } else {
    return false;
  }
}