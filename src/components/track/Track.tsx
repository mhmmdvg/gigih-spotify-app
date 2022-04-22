import React, { ReactNode } from 'react';
import Button from '../button/Button';

interface TrackProps {
  images: string;
  title: string;
  artist: string;
  albumName: string;
  onClick?: () => void;
  children: ReactNode;
  duration: string;
}

function Track(props: TrackProps) {
  const { images, title, artist, albumName, onClick, children, duration } =
    props;
  return (
    <table className="bg-gray-100 m-2 rounded-md">
      <tbody>
        <tr>
          <td className="px-8 pt-8">
            <img className="rounded-sm shadow-lg" src={images} alt={title} />
            <div className="py-8">
              <div className="mb-2">
                <h1 className="text-lg font-bold text-black">{title}</h1>
                <p className="text-gray-500">{artist}</p>
                <p className="text-gray-500">{duration}</p>
              </div>
              <p className="text-gray-500">{albumName}</p>
              <div className="mt-4">
                <Button data-testid="click-test" onClick={onClick}>
                  {children}
                </Button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Track;
