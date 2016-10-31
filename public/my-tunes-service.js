//start itunes-service
var songList = [];


var itunes = {
    getMusicByArtist: function(artist, cb) {
      
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      
      $('#get-music-button').text('LOADING....');
      return $.getJSON(apiUrl).then(function(response){
         songList = response.results.map(function (song) {
                  return {
                      title: song.trackName,
                      albumArt: song.artworkUrl60,
                      artist: song.artistName,
                      collection: song.collectionName,
                      price: song.collectionPrice,
                      preview: song.previewUrl,
                      id: song.trackId
                    };
                })
        $('#get-music-button').text('GET MUSIC');
        return songList;
      })
    }
}
//end itunes service


function MyTunes(){
    var myTunes = this;
    var myArray = loadTracks();
   

    myTunes.returnMyTunes = function(){
        return myArray;
    }

    myTunes.returnSongList = function(id){
        return songList;
    }

    myTunes.addTrack = function(id){       
        for(var i=0; i <songList.length; i++){
            var songs = songList[i];
            if(songs.id == id){
                myArray.push(songs)
                saveTracks();
        return
            }
        }
    }

    myTunes.removeTrack = function(id){
        for(var i=0; i<myArray.length; i++){
            var song = myArray[i];
            if(song.id == id){
                myArray.splice(i,1)
                saveTracks();
        return
            }
        }
    }

function clearData(){
    localStorage.removeItem('song')
}

function saveTracks(){
    localStorage.setItem('song', JSON.stringify(myArray))
}

myTunes.savePlaylist = function(playlistName, cb){
    var nPlaylist = {
        name: name,
        songs: myArray
    }
    $.post('api/playlists', nplaylist, cb)
}


function loadTracks(){
        var song = localStorage.getItem('song')
        if(song){
            song = JSON.parse(song)
        }else{
            song=[];
        }
        return song;
    }
}


