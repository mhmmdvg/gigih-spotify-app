import { ChangeEvent, FormEvent, useState } from 'react';
import { setSearch } from '../components/search-form/searchSlice';
import { useAppDispatch, useAppSelector } from '../reduce/hooks';

export default function useSearch() {
  const [searchKey, setSearchKey] = useState('');

  const dispatch = useAppDispatch();

  const { token, tokenType } = useAppSelector((state) => state.auth);

  const handleSearch = (key: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(key.target.value);
  };

  const searchTrack = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `https://api.spotify.com/v1/search?q=${searchKey}&type=track`;
    await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `${tokenType} ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => dispatch(setSearch(result.tracks.items)));
  };

  return [handleSearch, searchTrack] as const;
}
