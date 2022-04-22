import React from 'react';

interface PlaylistItemProps {
  images: string;
  title: string;
  artist: string;
  duration: string;
}

export default function PlaylistItemNoButton(props: PlaylistItemProps) {
  const { images, title, artist, duration } = props;

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
        <p className="text-gray-500">{duration}</p>
      </div>
    </div>
  );
}
