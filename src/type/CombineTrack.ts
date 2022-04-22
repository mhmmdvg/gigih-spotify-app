type Selected = {
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

export type CombineTrack = {
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
  isSelected?: Selected;
};
