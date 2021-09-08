const music=document.getElementById('music');
const image=document.getElementById('image');
const play=document.getElementById('play');
const previous=document.getElementById('previous');
const next=document.getElementById('next');
const title=document.getElementById('song');
const artist=document.getElementById('artist');
let songIndex=0;
let flag=false;
const songchnge=[
    {
        song_name:"./audio/Hold On.mp3",
        name:"HOLD ON",
        artist:"Justin Bieber",
        bgimage:"Images/2.png",
    },{
    song_name:"./audio/Stay.mp3",
    name:"STAY",
    artist:"Justin Bieber",
    bgimage:"Images/1.png",
},
,
{
    song_name:"audio/Joel Adams Please Don't Go.mp3",
    name:"PLEASE DON'T GO",
    artist:"Joel Adams",
    bgimage:"Images/3.png",
},{
    song_name:"audio/Let Me Down Slowly.mp3",
    name:"LET ME DOWN SLOWLY",
    artist:"Alec Benjamin",
    bgimage:"Images/4.png",
},{
    song_name:"audio/Bachpan Ka Pyar.mp3",
    name:"BACHPAN KA PYAAR",
    artist:"Badshaah |Sahdev",
    bgimage:"Images/1.png",

},{
    song_name:"audio/Koka.mp3",
    name:"KOKA",
    artist:"Enzo",
    bgimage:"Images/2.png",
}];



const playmusic=()=>{
    flag=true;
    
    music.play();
    
    play.classList.replace('fa-play-circle','fa-pause-circle');
    image.classList.add('animate');
  
    
    }
    const pausemusic=()=>{
        flag=false;
        
        music.pause();
        // play.style.marginBottom('5px');
        play.classList.replace('fa-pause-circle','fa-play-circle');
        
        image.classList.remove('animate');
      
        }
        play.addEventListener('click',()=>{
            if(flag==true){
                pausemusic();
            }
            else{
                playmusic();
            }
        });       


function loadsong(songchnge){
    title.textContent=songchnge.name;
    artist.textContent=songchnge.artist;
    music.src=songchnge.song_name;
    image.src=songchnge.bgimage;
 };
 loadsong(songchnge[songIndex]);

 const nextsong=()=>{
    if (songIndex === songchnge.length - 1) {
        songIndex = 0;
      }

     else {
        songIndex = songIndex + 1;
      }
      loadsong(songchnge[songIndex]);
      playmusic();
    
 };
    
 const prevsong=()=>{
    if (songIndex === 0) {
        songIndex = songchnge.length - 1;
      } else {
        songIndex = songIndex - 1;
      }
      loadsong(songchnge[songIndex]);
      playmusic();
 };
 music.addEventListener('ended',nextsong);
 next.addEventListener('click',nextsong);
 previous.addEventListener('click',prevsong);