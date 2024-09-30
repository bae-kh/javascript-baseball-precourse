export function ValidateNum(input) { //모델 
  let setinput = new Set(input);
  if (isNaN(Number(input)) || input.includes("0")|| setinput.size !=3 || input.length !== 3) {
    return false;
  }
  return true;
}

export function play(UserNum,ComNum) { //모델
  let strike = 0
  let ball = 0;
  if (UserNum[0] == ComNum[0]) strike+=1;
  else if (UserNum[0] == ComNum[1] || UserNum[0] == ComNum[2]) ball+=1;
  if (UserNum[1] == ComNum[1]) strike+=1;
  else if (UserNum[1] == ComNum[0] || UserNum[1] == ComNum[2]) ball+=1;
  if (UserNum[2] == ComNum[2]) strike+=1;
  else if (UserNum[2] == ComNum[0] || UserNum[2] == ComNum[1]) ball+=1;


  if (strike === 3) return 3;
  if (ball===0 && strike === 0) return "낫싱";
  if (strike > 0 && ball > 0) return `${ball}볼 ${strike}스트라이크`;
  if (strike > 0) return `${strike}스트라이크`;
  if (ball > 0) return `${ball}볼`;
}

export function getRandomNum() { // 랜덤한 수 받기  //모델
  while(true){
    let ComNum = MissionUtils.Random.pickNumberInRange(100,999);
    ComNum=String(ComNum);
    if(ValidateNum(ComNum)){
      return ComNum;
      break;
    }
  }
}