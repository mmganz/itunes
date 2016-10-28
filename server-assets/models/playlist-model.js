let dataAdapter = require('./data-adapter'),
  uuid = dataAdapter.uuid,
  schemator = dataAdapter.schemator,
  DS = dataAdapter.DS;

 let Playlist = DS.defineResource({
     name: 'playlist',
     endpoint: 'playlists',
     filepath: __dirname + '/..data/playlists.db'
 })

  function create(name, song, cb){
     let playlist = {
         id: uuid.v4(),
         name: name,
        //  downvotes: downvotes,
        //  upvotes: upvotes, 
         songs: {
             123: {
                 title: 'free your mind',
                //  order: 0
             }
            }
         }
        Playlist.create(playlist).then(cb).catch(cb) 

     }
     
     function getAll(query, cb){
         Playlist.findAll({}).then(cb).catch(cb)
     }

     function getById(id, query, cb){
         Playlist.find(id, query).then(cb).catch(cb)
     }

module.exports = {
  create,
  getAll,
  getById
}
