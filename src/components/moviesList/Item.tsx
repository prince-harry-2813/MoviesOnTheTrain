import React, { ReactElement } from "react";
import { Link, LinkProps } from "react-router-dom";
import MovieModel from "../../models/MovieModel";
import Details from "./Details";
const regex: RegExp = /<(“[^”]*”|'[^’]*’|[^'”>])*>/g; // clean summery from tags

const Item = ({ props }: any) => {
  const imagePath = props.imageURL ? props.imageURL : "";
  return (
    <Link to={{ pathname: "/details/" + props.id, state: props }}>
    <div>
      <div className="list-item">
        <img className="list-item-img" src={imagePath} alt={props.name}></img>
        <div className="list-item-det">
          <h4 className="list-item-name">{props.name}</h4>
          {(props.summary as string).slice(0, 100).trim() + "..."}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Item;
