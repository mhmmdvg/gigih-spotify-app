import React from 'react';

interface SelectedListProps {
  images: string;
  title: string;
  artist: string;
}

export default function SelectedList(props: SelectedListProps) {
  const { images, title, artist } = props;
  return (
    <div className="bg-gray-100 p-2 px-4 my-2 rounded-md flex flex-row justify-between">
      <div className="flex flex-row">
        <img
          className="w-16 rounded-sm shadow-lg object-cover"
          src={images}
          alt={title}
        />
        <div className="flex flex-col mx-4 content-center justify-center ">
          <h3 className="font-bold text-sm">{title}</h3>
          <p className="text-gray-500 text-sm">{artist}</p>
        </div>
      </div>
    </div>
  );
}
