var vid = document.getElementById("myVideo"); 
vid.addEventListener("ended", myHandler, false);

function myHandler(e)
{
  console.log("aaaaa")
}
function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 
