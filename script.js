console.log("Welcome to Spotify")


let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

let gif = document.getElementById('gif'); 
let songs =[
  {songName:"Whatever it takes",filePath:"song/1.mp3" ,coverPath:"covers/1.mp3" },
  
]

masterplay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<= 0) {
      audioElement.play();

      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
      gif.style.opacity=1;
    }
    else {
      audioElement.pause();

      masterplay.classList.remove('fa-pause-circle');
      masterplay.classList.add('fa-play-circle');
      gif.style.opacity=0;
    }
  })
audioElement.addEventListener('timeupdate',()=>{
  
  progress=parseInt(audioElement.currentTime/audioElement.duration)*100;
  
  myprogressbar.value =progress;
})
myprogressbar.addEventListener('change',()=>{
  audioElement.currentTime=myprogressbar.value*audioElement;
})