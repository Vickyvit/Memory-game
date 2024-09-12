let gameseq=[];
let userseq=[];
let buttons=["yellow","orange","green","red"];
let started=false;
let level=0;
var god=0;
let h2=document.querySelector("h2");//to change from start game to level no.


//to track the event of game whenever a kety is pressed
document.addEventListener("keypress",function (){
    //console.log("game started ");
    if(started ==false){
        console.log("Game is started");
        started =true;
        levelup();
    }
});
function flash(btn){
    // document.querySelector(btn)
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash"); 
    },1000);
}
function userflash(btn){
    // document.querySelector(btn)
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash"); 
    },1000);
}
function levelup(){
    userseq=[];//resetting uservalue to 0 b/c of game rule
    level++;
    h2.innerText=`level ${level}`;//to track,update level and display the level
;
    //need to choose random button to flash
    let randomidx=Math.floor(Math.random()*3);//generates the random no.
    let randcolor=buttons[randomidx];//choose the Random no from the idx
    let randbtn =document.querySelector(`.${randcolor}`);
                                        //tells you the class name of button
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);//tells you the inital color by whoch the game started
    flash(randbtn);
    //flash that random button using flash function
}
function checkans(idx){
    console.log("current "+ level);
    //now check the answer if it alread exists or not 
    // let idx=level-1; -->no need
    if(userseq[idx] === gameseq[idx]){
        // console.log("same value");
        if(userseq.length == gameseq.length){
          setTimeout(levelup(),1000);
        }
    }else{
        h2.innerText=`well played ! you reached level ${level} wanna play Again !!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}


function btnpress() {
    //this function tells you what work to do if button was pressed
    console.log("btn was pressed"+ this);
    let btn=this;//stores user pressed btn in another variable 
    userflash(btn);//this will fash the button which i clicked

    usercolor=btn.getAttribute("id");
    console.log(usercolor);//gets you the color that user just pressed
    userseq.push(usercolor);
    // checkans();
    checkans(userseq.length-1);

}
//function when a button a pressed
$(".btn").click(function(){
  var chosencolor=$(this).attr("id");
  userseq.push(chosencolor);
  sound(chosencolor);
  animate(chosencolor);
    // if(god>0){
    //     check(userseq.length-1);
    // }
});
//function to play sound when a button is clicked
function sound(colour)
{
  var audio=new Audio("sounds/"+colour+".mp3");
  audio.play();
}
//function to add and remove animation effect after 1 seconds
function animate(colour)
{
  $("#" + colour).addClass("pressed");
   setTimeout(function(){
     $("#" + colour).removeClass("pressed");
   },80);
 }
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}










