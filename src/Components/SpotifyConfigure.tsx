import React, { useState } from "react";
import {
  Container,
  Dropdown,
} from "react-bootstrap";
import SpotifySongSearch from "./spotify/SpotifySongSearch";
import SpotifyMyPlaylistsSearch from "./spotify/SpotifyMyPlaylistsSearch";
import SpotifyMySongsSearch from "./spotify/SpotifyMySongsSearch";
import SpotifyPlaylistSearch from "./spotify/SpotifyPlaylistSearch";
import SpotifyAlbumSearch from "./spotify/SpotifyAlbumSearch";

function renderSearchType(
  onDone: (backgroundColor: string, color: string, text: string) => void, searchType: string,
) {
  switch (searchType) {
    case 'songs':
      return <SpotifySongSearch onDone={onDone}/>;
    case 'playlists':
      return <SpotifyPlaylistSearch onDone={onDone} />;
    case 'albums':
      return <SpotifyAlbumSearch onDone={onDone} />;
    case 'my songs':
      return <SpotifyMySongsSearch onDone={onDone} />;
    case 'my playlists':
      return <SpotifyMyPlaylistsSearch onDone={onDone}/>;
    default:
      return <div>An error occurred. Please try again.</div>
  }
}

export default function SpotifyConfigure(props: {
  onDone: (link: string) => void;
}) {

  const [searchType, setSearchType] = useState('songs');

  function handleSearchChange(newSearchType: string) {
    setSearchType(newSearchType);
  }

  return (
    <div style={{ marginTop: 10 }}>
      <div style={{ marginBottom: 10}}>
        <Container>
        <div></div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              searching for: {searchType}
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={() => handleSearchChange('songs')}>songs</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={() => handleSearchChange('playlists')}>playlists</Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => handleSearchChange('albums')}>albums</Dropdown.Item>
              <Dropdown.Item href="#/action-4" onClick={() => handleSearchChange('my songs')}>my songs</Dropdown.Item>
              <Dropdown.Item href="#/action-5" onClick={() => handleSearchChange('my playlists')}>my playlists</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </ Container>
      </div>
        {renderSearchType(props.onDone, searchType)}
    </div>
  );
}
