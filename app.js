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
    template+= ` <div class="template">
      <div class="card">
         <img class="card-img-top" src="${songs.albumArt}">
          <div class="card-block">
          <h6 class="card-title title text">${songs.title}</h6>
          <p class="card-subtitle artist text">${songs.artist}</p>
          <p class="card-text album text">${songs.collection}</p>
          <p class="card-text price text">$${songs.price}</p>
          <audio controls>
            <source id="audios" src="${songs.preview}">
            </audio>
        </div>
      </div>
    </div>`
  }

  document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, 
true);

  songElem.innerHTML = template;
  console.log(songList);
  
}
