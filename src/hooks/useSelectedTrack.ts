import { useState } from 'react';
import { TrackType } from '../type';

export default function useSelectedTrack() {
  const [selected, setSelected] = useState<TrackType[]>([]);

  const handleSelected = (track: TrackType) => {
    const alreadySelected = selected.find((item) => item.id === track.id);

    if (alreadySelected) {
      setSelected(selected.filter((item) => item.id !== track.id));
    } else {
      setSelected([...selected, track]);
    }
  };

  return [selected, setSelected, handleSelected] as const;
}
