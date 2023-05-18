console.log("Welcome to MyMusic");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
//audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Aaoge Jab Tum Sajna....| Jab We Met 2007", filePath: "songs/1.mp3", coverPath: "image/1.jpg"},
    {songName: "Bhula Dena.... | AAshiqui 2 | Mustafa Zahid", filePath: "songs/2.mp3", coverPath: "image/2.jpg"},
    {songName: "DO GALLAN | Neha Kakkar, Rohanpreet", filePath: "songs/3.mp3", coverPath: "image/3.jpg"},
    {songName: "Gallan Goodiyaan (Dil Dhadakne Do)", filePath: "songs/4.mp3", coverPath: "image/4.jpg"},
    {songName: "Humnava Mere tu hai toh... | Rocky-Shiv", filePath: "songs/5.mp3", coverPath: "image/5.jpg"},
    {songName: "Khairiyat... | Chhichore | Arijit Singh", filePath: "songs/6.mp3", coverPath: "image/6.jpg"},
    {songName: "Main Dekhu Teri Photo So so Bar... | Lukha Chuppi", filePath: "songs/7.mp3", coverPath: "image/7.jpg"},
    {songName: "Naina : Khoobsurat | Jasleen Royal, Sonam Kapoor", filePath: "songs/8.mp3", coverPath: "image/8.jpg"},
    {songName: "Raataan Lambiyan | Jubin Nautiyal, Tanishk Bagchi", filePath: "songs/9.mp3", coverPath: "image/9.png"},
    {songName: "Saanson Ki Zarurat Hai | Dayanand Tiger", filePath: "songs/10.mp3", coverPath: "image/10.png"},   
    {songName: "Te Amo Dum Maaro Dum | Bipasha Basu, Rana", filePath: "songs/11.mp3", coverPath: "image/11.jpg"},
    {songName: "Woh Lamhe Woh Baatein | Atif Aslam and Mithoon", filePath: "songs/12.mp3", coverPath: "image/12.jpg"},
    {songName: "Yaadein Yaad Aati Hain | Sunidhi Chauhan and KK", filePath: "songs/13.mp3", coverPath: "image/13.jpg"},
    {songName: "Ziddi Dil ( Mary Kom) | Vishal Dadlani", filePath: "songs/14.mp3", coverPath: "image/14.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=13){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
