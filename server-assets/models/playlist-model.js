let dataAdapter = require('./data-adapter'),
    uuid = dataAdapter.uuid,
    schemator = dataAdapter.schemator,
    DS = dataAdapter.DS;

let Playlist = DS.defineResource({
    name: 'playlist',
    endpoint: 'playlists',
    filepath: __dirname + '/..data/playlists.db'
})

function create(name, songs, cb) {
    let playlist = {
        id: uuid.v4(),
        name: name,
        downvotes: 0,
        upvotes: 0,
        songs: {
            123: {
                title: "free your mind"
            }
        }
    }
    Playlist.create(playlist).then(cb).catch(cb)
}

function getAll(query, cb) {
    Playlist.findAll({}).then(cb).catch(cb)
}

function getById(id, query, cb) {
    Playlist.find(id, query).then(cb).catch(cb)
}

function editPlaylist(playlistId, input, cb) {

    Playlist.getById(playlistId).then(function(playlist){
        if(input.songs){
            playlist.songs = input.songs || {}
        }
    Playlist.update(playlist.id, playlist).then(function(){
        DS.udpate(playlist, playlistId).then(cb).catch(cb)
    
}).catch(cb)
    }).catch(cb)
}

module.exports = {
    create,
    getAll,
    getById,
    editPlaylist
}
