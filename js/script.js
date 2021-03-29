var vid = document.getElementById("myVideo"); 
vid.addEventListener("ended", myHandler, false);
var video = document.getElementsByTagName('video')[0];
var sources = video.getElementsByTagName('source');
var button1 = document.getElementById("button1")


function myHandler(e)
{
  choix.style.opacity = 100;
}

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 
function YourFunctionName(){
  document.getElementById("nom").innerHTML = parseInt(document.getElementById("nom").innerHTML) + 1;
  localStorage.setItem("key", parseInt(document.getElementById("nom").innerHTML));
}

function changeButton(val)
{
  switch(val)
  {
    case 1:
      sources[0].src = 'vid/1.mp4';
      video.load();
      button1.setAttribute('onClick','changeButton(4)')
      button1.innerHTML = "dddd"
      break;
    case 2:
      // a
    case 4:
      sources[0].src = 'vid/4.mp4'
      video.load();

  }
}