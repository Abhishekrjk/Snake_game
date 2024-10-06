
//game constant 
let  inputDir={x:0,y:0};
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('out.mp3');
const moveSound=new Audio('run.mp3');
const musicSound=new Audio('run.mp3');
const food2Sound=new Audio('food2.mp3');
 let speed =  6;
 let lastPaintTime=0;
 let score=0;
let snakeArr=[
    {x:13,y:15}
]
food={x:6,y:7};
//game function
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime-lastPaintTime)/1000<1/speed){
              return ;
    }
    lastPaintTime=ctime;
    gameEngine();
 
}
 function isCollide(snake){
     for(let i=1;i<snakeArr.length;i++){
        if(snake[i].x===snake[0].x&& snake[i].y === snake[0].y){
              return true;
           }
     }
        if(snake[0].x>=18||snake[0].x<=0 && snake[0].y>=18||snake[0].y<=0 ){
             return true;
        }
    

  }
function gameEngine(){
    //part one of this function updating the snake array 
        if(isCollide(snakeArr)){
          gameOverSound.play();
           musicSound.pause();
         inputDir={x: 0,y:0};
         alert("Game over .press any key to play again! ");
         snakeArr=[{x:13,y:15}];
         musicSound.play();
    
         score=0;
     }
     // high score show in pc
    
     // jb saaf kuch khaye to bada ho jayega 
     if(snakeArr[0].y===food.y  && snakeArr[0].x==food.x){
        food2Sound.play();
        score+=1;
        scorebox.innerHTML=   "score"  +score;
        snakeArr.unshift({x: snakeArr[0].x+inputDir.x ,y: snakeArr[0].y+inputDir.y});
        let a=2;
        let b=16;
        food={x: Math.round(a+(b-a)*Math.random()) ,y: Math.round(a+(b-a)*Math.random())}
     }
    //    
       
    //     
    
    //  //  moving snake
      for( let i=snakeArr.length-2;i>=0;i--){
       snakeArr[i+1]={...snakeArr[i]};
      }
      snakeArr[0].x  +=inputDir.x;
      snakeArr[0].y  +=inputDir.y;
    //part 2 display the snake and food
    //display our snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart =e.x; 
        
        if(index===0){
            snakeElement.classList.add('head') ;
        } 
        else{
            snakeElement.classList.add('snake') ;
        }  
           
        board.appendChild(snakeElement);
    });
        
    //display our snale food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart =food.x; 
    foodElement.classList.add('Food')    
    board.appendChild(foodElement);
     

}
//  let hiscore = localStorage.getItem("hiscore");
//      if(hiscore === null){
//          hiscoreval=0;
//          localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
//      }
//      else{
//          hiscorebox.innerHTML= "hiscore"+hiscoreval;
//      }



//main logic start here
window.requestAnimationFrame(main);


window.addEventListener('keydown',e=>{
   inputDir={x:0,y:1}
   foodSound.play();
   switch(e.key){
    case "ArrowUP":
        console.log("ArrowUp");
        inputDir.x=0;
        inputDir.y=+1;
        break;
    case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=-1;
            break;    
   
    case "ArrowLeft":
        console.log("ArrowLeft");
        inputDir.x=-1;
        inputDir.y=0;
       break;
    case "ArrowRight":
        console.log("ArrowRight");
        inputDir.x=1;
        inputDir.y=0;
        break;
    default:
        break;    
   }  
});
