import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    searchResults: [],
    playlistTracks: [],
    playlistName: 'New Playlist'
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }//end of constructor

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
      let newPlaylistTracks = this.state.playlistTracks;
      newPlaylistTracks.push(track);
      this.setState({playlistTracks: newPlaylistTracks});

  }//end of addTrack

      removeTrack(track){
      let newPlaylistTracks = this.state.playlistTracks.filter(item => item.id !== track.id);
          this.setState({playlistTracks: newPlaylistTracks});
      }// end of removeTrack

      updatePlaylistName(newPlaylistName){
        this.setState({playlistName: newPlaylistName});
      }//end of updatePlaylistName

      savePlaylist(){
        let tracksURI = this.state.playlistTracks.map(track => track.uri);
        Spotify.saveSpotifyPlaylist(this.state.playlistName,tracksURI).then(() =>{
          this.setState({playlistTracks: [],playlistName:'New Playlist'});
        });
      }//end of savePlaylist

      search(searchTerm){
        Spotify.searchSpotify(searchTerm).then(tracks =>{this.setState({searchResults: tracks});
        });
      }//end of search


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
