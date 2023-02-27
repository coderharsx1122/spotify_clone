let mainplay = document.getElementById("main-playbtn")//playbtn
let playgif = document.getElementById("play-gif")
let audio = new Audio('songs/1.mp3')
let songindex = 0;
let audioprogress_bar = document.getElementById('audioprogress-bar')
mainplay.addEventListener('click', () => {
  if (mainplay.classList.contains('fa-pause')) {
    // playbtn.classList.remove('fa fa-pause');
    mainplay.classList.remove('fa-pause')
    mainplay.classList.add('fa-play');
    playgif.style.opacity = 0
    audio.pause()
    pauseall()
  } else {
    mainplay.classList.add('fa-pause')
    mainplay.classList.remove('fa-play');
    playgif.style.opacity = 1
    audio.play()
    pauseall()
    let songitems = Array.from(document.getElementsByClassName('playlist-item'));
    songitems.forEach((ele, index) => {
      if(index == songindex){
       let i =  ele.getElementsByClassName('playlist-btn')[0].classList.add('fa-pause')
      }
    
    })
  }

})
// 

// songs litst
let songs = [
  { songname: "Let me love you", filepath: "songs/1.mp3", coverpath: "images/songs/song1.jpg" },
  { songname: "Jhume jo pathan", filepath: "songs/2.mp3", coverpath: "images/songs/song2.jpg" },
  { songname: "Obsession", filepath: "songs/3.mp3", coverpath: "images/songs/song3.jpg" },
  { songname: "jhumeee", filepath: "songs/4.mp3", coverpath: "images/songs/song1.jpg" },
  // {songname:"randommmm ",filepath:"songs/5.mp3",coverpath :"images/songs/song1.jpg"}
]

let songitems = Array.from(document.getElementsByClassName('playlist-item'));
songitems.forEach((ele, index) => {

  ele.getElementsByTagName('img')[0].src = songs[index].coverpath
  ele.getElementsByClassName('songname')[0].innerHTML = songs[index].songname

})
// audio progress bar
audio.addEventListener('timeupdate', () => {
  audioprogress_bar.value = (audio.currentTime / audio.duration) * 100
})
// on chnanging the value of progress bar
audioprogress_bar.addEventListener('change', () => {

  audio.currentTime = audioprogress_bar.value * audio.duration / 100
  // console.log(audio.currentTime)

})


// playlist btn
function pauseall() {

  Array.from(document.getElementsByClassName('playlist-btn')).forEach((element) => {

    element.classList.remove('fa-pause')
    element.classList.add('fa-play')
  })
}
Array.from(document.getElementsByClassName('playlist-btn')).forEach((element, index) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('fa-play')) {
      pauseall();
      songindex = index
      element.classList.add('fa-pause')
      element.classList.remove('fa-play')
      mainplay.classList.add('fa-pause')
      mainplay.classList.remove('fa-play')
      // audio.currentTime = 0;
      playgif.style.opacity = 1
      audio.src = `songs/${songindex + 1}.mp3`
      audio.play()
      palying_song_name.innerHTML = songs[songindex].songname
    }
    else {
      playgif.style.opacity = 0
      audio.pause()
      mainplay.classList.remove('fa-pause')
      mainplay.classList.add('fa-play');
      element.classList.remove('fa-pause')
      element.classList.add('fa-play')
    }
  })

})
// play next and previous
let prev_btn = document.getElementById('previous-playbtn');
let next_btn = document.getElementById('next-playbtn');
let palying_song_name = document.getElementById('playing-songname');

next_btn.addEventListener('click', () => {
  songindex += 1;
  if (songindex > 3) {
    songindex = 0
  }
  audio.currentTime = 0;
  audio.src = `songs/${songindex + 1}.mp3`
  audio.play()
  palying_song_name.innerHTML = songs[songindex].songname
  mainplay.classList.add('fa-pause')
  mainplay.classList.remove('fa-play')
  console.log(songindex)
  playgif.style.opacity = 1

  pauseall()
  let songitems = Array.from(document.getElementsByClassName('playlist-item'));
  songitems.forEach((ele, index) => {
    if(index == songindex){
     let i =  ele.getElementsByClassName('playlist-btn')[0].classList.add('fa-pause')
    }
})
})



prev_btn.addEventListener('click', () => {
  songindex -= 1;
  if (songindex < 0) {
    songindex = 3
  }
  audio.currentTime = 0;
  audio.src = `songs/${songindex + 1}.mp3`
  audio.play()
  palying_song_name.innerHTML = songs[songindex].songname
  mainplay.classList.add('fa-pause')
  mainplay.classList.remove('fa-play')
  console.log(songindex)
  playgif.style.opacity = 1
  pauseall()
  let songitems = Array.from(document.getElementsByClassName('playlist-item'));
  songitems.forEach((ele, index) => {
    if(index == songindex){
     let i =  ele.getElementsByClassName('playlist-btn')[0].classList.add('fa-pause')
    }
})
})

