import { useState } from 'react';
import { setSelectedTrack } from '../pages/home/selectedSlice';
import { useAppDispatch } from '../reduce/hooks';
import { TrackType } from '../type';

export default function useSelectedTrack() {
  const [selected, setSelected] = useState<TrackType[]>([]);

  const dispatch = useAppDispatch();

  const handleSelected = (track: TrackType) => {
    const alreadySelected = selected.find((item) => item.id === track.id);

    if (alreadySelected) {
      setSelected(selected.filter((item) => item.id !== track.id));
      dispatch(
        setSelectedTrack(selected.filter((item) => item.id !== track.id))
      );
    } else {
      setSelected([...selected, track]);
      dispatch(setSelectedTrack([...selected, track]));
    }
  };

  return [selected, handleSelected] as const;
}
