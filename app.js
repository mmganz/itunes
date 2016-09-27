function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList){
  var songElem = document.getElementById('song-list')
  songElem.innerHTML = ''
  for (var i = 0; i < songList.length; i++) {
    var songs =songList[i]
    songElem.innerHTML+= `<h1>${songs.title}</h1>`
  }
  console.log(songList);
  
}
