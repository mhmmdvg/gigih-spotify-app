export type TrackTypes = {
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
  uri?: string;
};
