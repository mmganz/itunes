
function getMusic(event){
  event.preventDefault();
  var form = event.target;
  form.artist
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}


var myTunes = new MyTunes();

var helper = function(id){
 myTunes.addTrack(id);
 drawSongs(myTunes.returnMyTunes(), '#my-tunes');
}

var removeh = function(id){
  myTunes.removeTrack(id);
  drawSongs(myTunes.returnMyTunes(), '#my-tunes')
}


drawSongs(myTunes.returnMyTunes(), '#my-tunes')

$('.promote').click(function(){
  var $current = $(this).closest('div.template');
  var $previous = $current.prev('div.template');
  if($previous.length !==0){
    $current.insertBefore($previous);
  }
  return false;

});

$('.demote').click(function(){
  var $current = $(this).closest('div.template');
  var $next = $current.next('div.template');
  if($next.length !==0){
    $current.insertAfter($next);
  }
return false;
});


function drawSongs(songList, target){


if(target != "#my-tunes"){
      target = '#song-list'}

//  function update(list, target){
   var elem = $(target)
   elem.empty()

  for(var i in songList){
    var songs =songList[i]
    var songsTemplate = `   
    <div class="stay-template">
      <div class="card">
         <img class="card-img-top" src="${songs.albumArt}">
          <div class="card-block">
          <h6 class="card-title title text">${songs.title}</h6>
          <p class="card-subtitle artist text">${songs.artist}</p>
          <p class="card-text album text">${songs.collection}</p>
          <p class="card-text price text">$${songs.price}</p>
          <p class="card-text id">${songs.id}</p>
          <audio controls>
            <source id="audios" src="${songs.preview}">
            </audio>
             <button onclick="helper(${songs.id})" class="btn btn-secondary">Add Song to MyTunes</button>
        </div>
      </div>
    </div>`

    var myTunes =
    `<div class="template">
      <div class="card">
         <img class="card-img-top" src="${songs.albumArt}">
          <div class="card-block">
          <h6 class="card-title title text">${songs.title}</h6>
          <p class="card-subtitle artist text">${songs.artist}</p>
          <p class="card-text album text">${songs.collection}</p>
          <p class="card-text price text">$${songs.price}</p>
          <p class="card-text id">${songs.id}</p>
          <audio controls>
            <source id="audios" src="${songs.preview}">
            </audio>
             <button onclick="removeh(${songs.id})" class="btn btn-secondary">Remove Song</button>
              <button class="btn btn-secondary promote">Promote Song</button>
               <button class="btn btn-secondary demote">Demote</button>
        </div>
      </div>
    </div>`

elem.append(target == '#song-list' ? songsTemplate : myTunes)

  }//loop

    document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, 
true);

//  }//function update


}//draw songs

// drawSongs();


// var myTunesElem = document.getElementById('my-tunes')
// myTunesElem.innerHTML = ''
// var template = ''
// for (var i = 0; i < songList.length; i++) {
//     var songs =songList[i]
//     template+= ` 
//       <h1>My Tunes</h1>    
//     <div class="template">
//       <div class="card">
//          <img class="card-img-top" src="${songs.albumArt}">
//           <div class="card-block">
//           <h6 class="card-title title text">${songs.title}</h6>
//           <p class="card-subtitle artist text">${songs.artist}</p>
//           <p class="card-text album text">${songs.collection}</p>
//           <p class="card-text price text">$${songs.price}</p>
//           <p class="card-text id">${songs.id}</p>
//           <audio controls>
//             <source id="audios" src="${songs.preview}">
//             </audio>
//              <button id="${songs.id}" class="btn btn-secondary">Add Song to My Tunes</button>
//         </div>
//       </div>
//     </div>`
//   }

//     document.addEventListener('play', function(e){
//   var audios = document.getElementsByTagName('audio');
//   for(var i = 0, len = audios.length; i < len;i++){
//       if(audios[i] != e.target){
//           audios[i].pause();
//       }
//   }
// }, 
// true);


// //   document.addEventListener('play', function(e){
// //   var audios = document.getElementsByTagName('audio');
// //   for(var i = 0, len = audios.length; i < len;i++){
// //       if(audios[i] != e.target){
// //           audios[i].pause();
// //       }
// //   }
// // }, 
// // true);

// //   myTunesElem.innerHTML = template;
// //   console.log(songList);

// // })




//   var songElem = document.getElementById('song-list')
//   songElem.innerHTML = ''
//   var template = ''
//   for (var i = 0; i < songList.length; i++) {
//     var songs =songList[i]
//     template+= ` <div class="template">
//       <div class="card">
//          <img class="card-img-top" src="${songs.albumArt}">
//           <div class="card-block">
//           <h6 class="card-title title text">${songs.title}</h6>
//           <p class="card-subtitle artist text">${songs.artist}</p>
//           <p class="card-text album text">${songs.collection}</p>
//           <p class="card-text price text">$${songs.price}</p>
//           <p class="card-text id">${songs.id}</p>
//           <audio controls>
//             <source id="audios" src="${songs.preview}">
//             </audio>
//              <button id="${songs.id}" class="btn btn-secondary">Add Song to My Tunes</button>
//         </div>
//       </div>
//     </div>`
//   }

//   document.addEventListener('play', function(e){
//   var audios = document.getElementsByTagName('audio');
//   for(var i = 0, len = audios.length; i < len;i++){
//       if(audios[i] != e.target){
//           audios[i].pause();
//       }
//   }
// }, 
// true);

//   songElem.innerHTML = template;
//   console.log(songList);
  
// }

