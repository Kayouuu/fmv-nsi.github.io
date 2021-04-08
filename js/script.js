var vid = document.getElementById("myVideo"); 
vid.addEventListener("ended", showBtn, false);

var video = document.getElementsByTagName('video')[0];
var sources = video.getElementsByTagName('source');
var choix = document.getElementById("choix")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")

var button_return = document.getElementById("return") 

function showBtn(e)
{
  hideUnusedBtn()
  choix.style.opacity = 100;
}

function playVid() { 
  vid.play(); 
  console.log("aaa")
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
  hideUnusedBtn()
  switch(val)
  {
    case 0:
      sources[0].src = 'vid/000.mp4';
      video.load();
    case 101:
      sources[0].src = 'vid/101.mp4';
      video.load();
      button1.setAttribute('onClick','changeButton(4)') 
      gameOver(000)
      
      break;
    case 102:
      sources[0].src = 'vid/102.mp4';
      video.load();
      button1.setAttribute('onClick','changeButton(4)') 
      hideBtn("")

      break;
    case 103:
      sources[0].src = 'vid/103.mp4'
      video.load();

    default:
      console.log("erreur");
  }
}

function hideBtn(val1, val2, val3 = "/", val4 = "/")
{
  choix.style.opacity = 0;

  button1.innerHTML = val1
  button2.innerHTML = val2
  button3.innerHTML = val3
  button4.innerHTML = val4

  video.play();
}
function gameOver(val)
{
  video.play();
  choix.style.opacity = 0;

  button_return.style.opacity = 100;
  button_return.setAttribute('onClick','changeButton( " '+val+' " )')
}
function hideUnusedBtn()
{
  if(button1.innerHTML = "//")
  {
    button1.style.opacity = 0;
  }
  if(button2.innerHTML = "//")
  {
    button2.style.opacity = 0;
  }
  if(button3.innerHTML = "//")
  {
    button3.style.opacity = 0;
  }
  if(button4.innerHTML = "//")
  {
    button4.style.opacity = 0;
  }
}