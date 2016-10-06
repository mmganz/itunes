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
    var myTracks = loadTracks();
    var myArray = [];

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
            }
        }
        return
    }

    myTunes.removeTrack = function(id){
        for(var i=0; i<songList.length; i++){
            var songs = songList[i];
            if(songs.id == id){
                myArray.splice(i,1)
            }
        }
        return
    }


    myTunes.promoteTrack = function(){}
    myTunes.demoteTrack = function(){}

    function saveTracks(){}
    function loadTracks(){}
}