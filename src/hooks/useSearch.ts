import { ChangeEvent, useState } from 'react';
import { PlayTrackMap } from '../pages/home/type';

export default function useSearch() {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState<PlayTrackMap[]>([]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return [searchKey, searchResults, setSearchResults, handleSearch];
}
