export type PlayTrackMap = {
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
  isSelected?: {
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
  };
};

export type Playlist = {
  id: string;
  name: string;
  description: string;
};
