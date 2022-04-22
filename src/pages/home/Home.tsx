import React, { useEffect, useState } from 'react';
import Track from '../../components/track/Track';
import useSelectedTrack from '../../hooks/useSelectedTrack';
import { useAppSelector } from '../../reduce/hooks';
import { CombineTrackType } from '../../type';
import CreatePlaylist from '../../components/create-playlist/CreatePlaylist';
import { millisToMinutesAndSeconds } from '../../services/msToMinute';

export default function Home() {
  const [selected, handleSelected] = useSelectedTrack();

  const [combineTrack, setCombineTrack] = useState<CombineTrackType[]>([]);

  const { searchResult } = useAppSelector((state) => state.search);

  useEffect(() => {
    const combineItem = searchResult.map((track) => ({
      ...track,
      isSelected: selected.find((item) => item.id === track.id),
    }));
    setCombineTrack(combineItem);
  }, [searchResult, selected]);

  return (
    <div className="w-full py-10 px-4">
      <CreatePlaylist />

      <hr className="my-6" />
      {combineTrack.length === 0 ? null : (
        <h1 className="my-6 text-3xl font-extrabold">Songs</h1>
      )}
      <div className="grid grid-cols-2">
        {combineTrack.map((track) => (
          <Track
            key={track.id}
            images={track.album.images[0]?.url}
            title={track.name}
            artist={track.artists[0]?.name}
            albumName={track.album.name}
            duration={millisToMinutesAndSeconds(track.duration_ms)}
            onClick={() => handleSelected(track)}
          >
            {track.isSelected ? 'Deselect' : 'Select'}
          </Track>
        ))}
      </div>
    </div>
  );
}
