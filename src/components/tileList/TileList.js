import React from "react";
import {Tile} from '../../components/tile/Tile'

export const TileList = ({list}) => {
  return (
    <div>
      <ul>
        {list.map(({name,...description})=><Tile name={name} description={description} />)}
      </ul>
    </div>
  );
};
//