
// Old version bbutton controls
//const upBtn = document.querySelector(".upBtn");
// const downBtn = document.querySelector(".downBtn");
// const leftBtn = document.querySelector(".leftBtn");
// const rightBtn = document.querySelector(".rightBtn");
const controls = document.querySelector(".controls");
const reset = document.querySelector(".reset");
const yourScore = document.querySelector(".yourScore");
const liveScore = document.querySelector(".liveScore");
const gameOverBox= document.querySelector(".gameOverBox");
const body = document.querySelector("body");
const board = document.querySelector(".board");

const boxes =[];
for(let i=1 ; i<=400; i++ ){
    const box= document.createElement("div");
    box.classList.add("box");
    board.append(box);
    boxes.push(box);
}

let randIndexArr=[];
let score=1;
let finalScore=score-1;
let snakeLengthArr=[];

let randIndex = Math.floor((Math.random()*boxes.length));
console.log(randIndex);
boxes[randIndex].classList.add("snakeHead");
randIndexArr.push(randIndex);

let randFood ; let foodBox;
const food = ()=>{
  if (foodBox) {
        foodBox.classList.remove("food");
    }
  randFood = Math.floor((Math.random()*boxes.length));
  console.log(randFood);
  foodBox = boxes[randFood];
  foodBox.classList.add("food");
}
food();



const rightBoundArr=[];
const leftBoundArr=[];

for(let i=0 ; i<=380 ; i+=20 ){
    leftBoundArr.push(i);
    
}
for(let i=19 ; i<=399 ; i+=20){
    rightBoundArr.push(i);
}

let direction = "null";
/* Old version button controls DOM Event
upBtn.addEventListener("pointerdown" , ()=>{
    direction="up";
    
});
downBtn.addEventListener("pointerdown" , ()=>{
    direction="down";
    
});
leftBtn.addEventListener("pointerdown" , ()=>{
    direction="left";
});
rightBtn.addEventListener("pointerdown" , ()=>{
    direction="right";
});*/
document.addEventListener("keydown" , rightMove = (event)=>{
    if(event.key==="ArrowRight" || event.key==="d" || event.key==="D"){
        direction="right";
    }
})
document.addEventListener("keydown" , leftMove= (event)=>{
    if(event.key==="ArrowLeft" || event.key==="a" || event.key==="A"){
       direction="left";
    }
})
document.addEventListener("keydown" ,upMove= (event)=>{
    event.preventDefault();
    if(event.key==="ArrowUp" || event.key==="w" || event.key==="W"){
       direction="up";
    }
})
document.addEventListener("keydown" , downMove = (event)=>{
    event.preventDefault();
    if(event.key==="ArrowDown" || event.key==="s" || event.key==="S"){
       direction="down";
    }

})

function gameOver() {
    

    document.removeEventListener("keydown", rightMove);
    document.removeEventListener("keydown", leftMove);
    document.removeEventListener("keydown", downMove);
    document.removeEventListener("keydown", upMove);
    clearInterval(motion);
    console.log("GAME OVER");
    gameOverBox.style.display="flex";
    board.style.display="none";
}

let motion = setInterval(() => {

    if(direction === "right"){
          
         if (rightBoundArr.includes(randIndex)) {
            gameOver();
            return;
         }

        boxes[randIndex].classList.remove("snakeHead");
        randIndex++;
        randIndexArr.push(randIndex);
        boxes[randIndex].classList.add("snakeHead");
        scoreInc();
        snakeLength();
        selfKill();
    }

    if(direction === "left"){
         
         if (leftBoundArr.includes(randIndex)) {
            gameOver();
            return;
         }

        boxes[randIndex].classList.remove("snakeHead");
        randIndex--;
        randIndexArr.push(randIndex);
        boxes[randIndex].classList.add("snakeHead");
        scoreInc();
        snakeLength();
        selfKill();
    }

    if(direction === "up"){
         if(randIndex-20>=0){
        boxes[randIndex].classList.remove("snakeHead");
        randIndex=randIndex-20;
        randIndexArr.push(randIndex);
        boxes[randIndex].classList.add("snakeHead");
        }else{
            console.log("game over");
            gameOver();
        }
        scoreInc();
        snakeLength();
        selfKill();
    }

    if(direction === "down"){
        if(randIndex+20<boxes.length){
        boxes[randIndex].classList.remove("snakeHead");
        randIndex=randIndex+20;
        randIndexArr.push(randIndex);
        boxes[randIndex].classList.add("snakeHead");
        }else{
            console.log("game over");
            gameOver();
        }
        scoreInc();
        snakeLength();
        selfKill();
    }

}, 150);


const scoreInc = ()=>{
    if(randIndex==randFood){
        console.log("yayyyy");
        food();
        score++;
        finalScore=score-1;
        yourScore.innerText=finalScore;
        liveScore.innerText=`Score: ${finalScore}`;
    }
}

const snakeLength =()=>{
    //removes old colour
    snakeLengthArr.forEach(snakeBox => {
        boxes[snakeBox].style.backgroundColor = "";
    });

    snakeLengthArr=[];
    
    for(let i = randIndexArr.length - 1; i >= randIndexArr.length - score; i--){
        snakeLengthArr.push(randIndexArr[i]);
        
}
    snakeLengthArr.forEach(snakeBox => {
        boxes[snakeBox].style.backgroundColor="blue";
    });
}

const selfKill = () =>{
    let snakeBody = snakeLengthArr.slice(1);
    if(snakeBody.includes(randIndex)){
        gameOver();
    }
}

reset.addEventListener("click" , ()=>{
    window.location.reload();
})
//snakeGame V 2.0
// touch controls for touch screen devices 
let startX , startY , endX , endY , dX , dY ;


body.addEventListener("touchstart" , (e)=>{
    startX = Math.abs(e.touches[0].clientX);
    startY = Math.abs(e.touches[0].clientY);   
});
body.addEventListener("touchend", (e) => {
    endX = Math.abs(e.changedTouches[0].clientX);
    endY = Math.abs(e.changedTouches[0].clientY);

    // del value of the touch
    dX = endX-startX;
    dY = endY-startY; console.log(dX ,dY);
    
    if (Math.abs(dX) < 20 && Math.abs(dY) < 20) {
    return;
    }
    if (Math.abs(dX)>Math.abs(dY)) {
    direction = dX > 0 ? "right" : "left" ;
    } else {
    direction = dY > 0 ? "down" : "up";
}
});

