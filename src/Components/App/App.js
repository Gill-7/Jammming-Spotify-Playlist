import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Hamza",
          artist: "Satinder Sartaj",
          album: "Hamza",
          id: 4,
        },
        {
          name: "Mann kunto maula",
          artist: "Satinder Sartaj",
          album: "Mann",
          id: 5,
        },
      ],
      playlistName: "New Playlist",
      playlistTracks: [
        {
          name: "Luna",
          artist: "Diljit Dosanjh",
          album: "Moonchild Era",
          id: 1,
        },
        {
          name: "Vibe",
          artist: "Diljit Dosanjh",
          album: "Moonchild Era",
          id: 2,
        },
        {
          name: "Black & White",
          artist: "Diljit Dosanjh",
          album: "Moonchild Era",
          id: 3,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let playlistTracks = this.state.playlistTracks;
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    playlistTracks.push(track);
    this.setState({
      playlistTracks: playlistTracks,
    });
  }

  removeTrack(track) {
    let afterRemovedPlaylist = this.state.playlistTracks.filter(
      (removedTrack) => removedTrack.id !== track.id
    );
    this.setState({
      playlistTracks: afterRemovedPlaylist,
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name,
    });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    console.log(trackURIs);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              playlistName={this.state.playlistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
