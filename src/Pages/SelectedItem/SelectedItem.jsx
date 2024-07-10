import React from "react";
import { useParams } from "react-router-dom";

function SelectedItem() {
  const params = useParams();

  return (
    <div>
      <h1>{params.itemID}</h1>
      <p>{params.itemName}</p>
    </div>
  );
}

export default SelectedItem;
