import React from 'react';
import Track from '../track-components/Track';

type UserType = {
  id: string;
  display_name: string;
};

type TrackDeep = {
  track: {
    id: string;
    name: string;
    artists: [
      {
        name: string;
      }
    ];
    album: {
      name: string;
      images: [
        {
          url: string;
        }
      ];
    };
  };
};

type TrackListProps = {
  trackPlaylist: TrackDeep[];
  profile: UserType | null;
  playlist: {
    name: string;
    description: string;
  } | null;
};

export default function CreatePlaylist(props: TrackListProps) {
  const { profile, playlist, trackPlaylist } = props;

  return (
    <div className="playlist-container">
      <h1>Create Playlist</h1>
      <div>
        <h3>{profile?.display_name}</h3>
        <p>ID: {profile?.id}</p>
      </div>

      <h1>{playlist?.name} Playlist</h1>

      <h3>{playlist?.description}</h3>
      <div className="Wrapper">
        {trackPlaylist.map((item) => (
          <React.Fragment key={item.track.id}>
            <Track
              images={item.track.album.images[0].url}
              title={item.track.name}
              artist={item.track.artists[0].name}
              albumName={item.track.album.name}
              onClick={() => console.log('click')}
            >
              Play
            </Track>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
