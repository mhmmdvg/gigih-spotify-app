import React from 'react';
// import Track from '../../components/track/Track';
// import useAddPlaylist from '../../hooks/useAddPlaylist';
import useCreatePlaylist from '../../hooks/useCreatePlaylist';
import useInputPlaylist from '../../hooks/useInputPlaylist';

export default function CreatePlaylist() {
  // const [trackPlaylist, addToPlaylist] = useAddPlaylist();
  const [inputPlaylist, handleInputPlaylist] = useInputPlaylist();
  const [createPlaylist] = useCreatePlaylist();

  return (
    <>
      <form
        className="flex flex-col items-start content-center justify-center "
        onSubmit={(event) => createPlaylist(event, inputPlaylist)}
      >
        <h1 className="text-left mb-6 text-3xl font-extrabold">
          Create Your Playlist
        </h1>
        <input
          className="w-full py-4 px-2 mb-6 rounded-md font-extrabold bg-gray-100"
          placeholder="Playlist Name"
          name="title"
          onChange={handleInputPlaylist}
          value={inputPlaylist.title}
          maxLength={10}
        />
        <textarea
          className=" w-full h-52 py-4 px-2 mb-6 rounded-md font-extrabold bg-gray-100"
          placeholder="Description"
          name="description"
          onChange={handleInputPlaylist}
          value={inputPlaylist.description}
        />

        <input
          className="p-2 w-40 text-white rounded-md cursor-pointer bg-black opacity-70 hover:opacity-100 transition-opacity duration-200"
          type="submit"
          value="Create Playlist"
        />
      </form>

      {/* <div className="track-container">
        {trackPlaylist.map((item) => (
          <Track
            key={item.track.id}
            images={item.track.album.images[0]?.url}
            title={item.track.name}
            artist={item.track.artists[0]?.name}
            albumName={item.track.album.name}
          >
            Play
          </Track>
        ))}
      </div> */}
    </>
  );
}
