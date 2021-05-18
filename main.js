function getNum (){
  let randomNumber = Math.floor(Math.random()*6+1);
  return randomNumber;
 }
 let randomNum1 = getNum();
 let randomNum2 = getNum();
 document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");
 
 
 document.addEventListener('click',(e)=>{
   e.target = "button";
    location.reload();
  })
  if(randomNum1 === randomNum2){
    document.querySelector("h1").innerText = "Draw";
  }
  else if (randomNum1 > randomNum2){
    document.querySelector("h1").innerText = " 🚩Player1 Won"
  }
  else {
    document.querySelector("h1").innerText = "player2 Won 🚩"
  }
  