import React from 'react';
import { useAddPlaylist } from '../../hooks/usePlaylist';
import { setSelectedTrack } from '../../pages/home/selectedSlice';
// import useSelectedTrack from '../../hooks/useSelectedTrack';
import { useAppDispatch, useAppSelector } from '../../reduce/hooks';
import { TrackType } from '../../type';
import Button from '../button/Button';
import SelectedList from '../selected-list/SelectedList';
// import PlaylistItem from '../playlist-item/PlaylistItem';
// import PlaylistItem from '../playlist-item/PlaylistItem';

export default function Rightbar() {
  const [addToPlaylist] = useAddPlaylist();
  const { selectedTrack } = useAppSelector((state) => state.selectTrack);

  const dispatch = useAppDispatch();

  return (
    <div className="w-64 py-6 px-2 bg-gray-50 border-l border-gray-200 overflow-auto hover:overflow-scroll h-screen">
      <h1 className="font-bold text-2xl">Selected List</h1>
      {selectedTrack.map((item: TrackType) => (
        <SelectedList
          key={item.id}
          images={item.album.images[0]?.url}
          title={item.name}
          artist={item.artists[0]?.name}
        />
      ))}
      {selectedTrack.length === 0 ? null : (
        <Button
          onClick={() => {
            addToPlaylist(selectedTrack);
            dispatch(setSelectedTrack([]));
          }}
        >
          Add to Playlist
        </Button>
      )}
    </div>
  );
}
