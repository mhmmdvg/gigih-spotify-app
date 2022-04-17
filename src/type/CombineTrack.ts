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
  isSelected?: Selected;
};
