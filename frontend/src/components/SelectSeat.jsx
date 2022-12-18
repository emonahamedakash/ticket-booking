import React from "react";
import { useLocation } from "react-router-dom";

const SelectSeat = () => {
  const { state } = useLocation();
  const { train } = state;
  console.log(train);

  return <div>SelectSeat</div>;
};

export default SelectSeat;
