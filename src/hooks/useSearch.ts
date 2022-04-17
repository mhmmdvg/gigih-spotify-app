import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppSelector } from '../reduce/hooks';
import { TrackType } from '../type';

export default function useSearch() {
  const [searchKey, setSearchKey] = useState('');
  const [searchResult, setSearchResult] = useState<TrackType[]>([]);

  const { token } = useAppSelector((state) => state.auth);

  const handleSearch = (key: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(key.target.value);
  };

  const searchTrack = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `https://api.spotify.com/v1/search?q=${searchKey}&type=track`;
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => setSearchResult(result.tracks.items));
  };

  return [searchResult, handleSearch, searchTrack] as const;
}
