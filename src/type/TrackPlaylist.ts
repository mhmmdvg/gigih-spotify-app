// type NestedTrackList = {
//   track: {
//     id: string;
//     name: string;
//     artists: [
//       {
//         name: string;
//       }
//     ];
//     album: {
//       name: string;
//       images: [
//         {
//           url: string;
//         }
//       ];
//     };
//   };
// };

export type TrackPlaylist = {
  track: {
    id: string;
    name: string;
    artists: [
      {
        name: string;
      }
    ];
    album: {
      name: string;
      images: [
        {
          url: string;
        }
      ];
    };
    duration_ms?: number;
  };
};
