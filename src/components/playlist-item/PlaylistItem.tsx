import React, { ReactNode } from 'react';

interface PlaylistItemProps {
  images: string;
  title: string;
  artist: string;
  onClick?: () => void;
  children?: ReactNode;
}

export default function PlaylistItem(props: PlaylistItemProps) {
  const { images, title, artist, onClick, children } = props;

  return (
    <div className="bg-gray-100 p-2 px-4 my-1 rounded-md flex flex-row justify-between">
      <div className="flex flex-row">
        <img className="w-16 rounded-sm shadow-lg" src={images} alt={title} />
        <div className="flex flex-col mx-4 content-center justify-center ">
          <h3 className="font-medium text-base">{title}</h3>
          <p className="text-gray-500">{artist}</p>
        </div>
      </div>
      <div className="flex flex-col mx-4 content-center justify-center ">
        <button
          className="text-base text-white px-2 h-8 rounded-md bg-black "
          onClick={onClick}
          type="button"
        >
          {children}
        </button>
      </div>
    </div>
  );
}
