import React, { useState } from "react";

export default function useData() {
  const [isData, setData] = useState([]);

  const handleData = (data) => {
    setData(data);
  };

  return [isData, handleData];
}
