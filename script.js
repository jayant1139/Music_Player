const music=document.getElementById('music');
const image=document.getElementById('image');
const play=document.getElementById('play');
const previous=document.getElementById('previous');
const next=document.getElementById('next');
const title=document.getElementById('song');
const artist=document.getElementById('artist');
let songIndex=0;
let flag=false;
const songchnge=[{
    song_name:"audio/SANAM HO JA.mp3",
    name:"Sanam Ho Ja",
    artist:"Arjun",
    bgimage:"Images/1.png",
},
{
    song_name:"audio/illegal.mp3",
    name:"Illegal Weapon",
    artist:"Garry Sandhu",
    bgimage:"Images/2.png",
},
{
    song_name:"audio/Koka.mp3",
    name:"Koka",
    artist:"Enzo",
    bgimage:"Images/3.png",
},{
    song_name:"audio/O Meri Jaa.mp3",
    name:"O Meri Jaan",
    artist:"Emran Hashmi",
    bgimage:"Images/4.png",
},{
    song_name:"audio/Suit.mp3",
    name:"Suit",
    artist:"Guru Randhawa",
    bgimage:"Images/1.png",

},{
    song_name:"audio/Teri Snapchat.mp3",
    name:"Teri Snapchat",
    artist:"Inder Dosanjh",
    bgimage:"Images/2.png",
},{
    song_name:"audio/Tu ki jaane.mp3",
    name:"Tu ki jaane",
    artist:"Risky Maan",
    bgimage:"Images/3.png",
},,{
    song_name:"audio/Yeh Jo Teri Payal.mp3",
    name:"Yeh Jo Teri Payal",
    artist:"Abhijeet",
    bgimage:"Images/4.png",
},{
    song_name:"audio/Black N White.mp3",
    name:"Black N White",
    artist:"Gurnazar Ft. Himanshi Khurana",
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