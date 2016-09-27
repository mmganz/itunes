function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList){
  var songElem = document.getElementById('song-list')
  songElem.innerHTML = ''
  var template = ''
  for (var i = 0; i < songList.length; i++) {
    var songs =songList[i]
    template+= `<h1>${songs.title}</h1>`
  }
  songElem.innerHTML = template;
  console.log(songList);
  
}
