import { useEffect, useState } from 'react';
import { useAppSelector } from '../reduce/hooks';

export default function useUser() {
  const [isUser, setUser] = useState<null | {
    display_name: string;
    id: string;
  }>(null);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result) => result);
      setUser(response);
    };
    getUsers();
  }, [token]);

  return [isUser];
}
