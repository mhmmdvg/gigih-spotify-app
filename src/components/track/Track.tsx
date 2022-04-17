import React, { ReactNode } from 'react';
import Button from '../button/Button';

interface TrackProps {
  images: string;
  title: string;
  artist: string;
  albumName: string;
  onClick?: () => void;
  children: ReactNode;
}

function Track(props: TrackProps) {
  const { images, title, artist, albumName, onClick, children } = props;
  return (
    <table className="card">
      <tbody>
        <tr>
          <td className="card-wrap">
            <img className="Imageopt" src={images} alt={title} />
            <div className="card-information">
              <div className="head-information">
                <h1 className="Text">{title}</h1>
                <p className="Text">{artist}</p>
              </div>
              <p className="Text">{albumName}</p>
              <Button onClick={onClick}>{children}</Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Track;
