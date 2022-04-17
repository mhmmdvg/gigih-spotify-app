import { ChangeEvent, useState } from 'react';

export default function useInputPlaylist() {
  const [inputPlaylist, setInputPlaylist] = useState({
    title: '',
    description: '',
  });
  const handleInputPlaylist = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputPlaylist({ ...inputPlaylist, [name]: value });
  };

  return [inputPlaylist, handleInputPlaylist] as const;
}
