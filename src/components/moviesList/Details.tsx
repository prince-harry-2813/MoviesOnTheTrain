import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../star";

import { EditTwoTone } from "@ant-design/icons";

const Details: React.FC<any> = (props) => {
  var item = props.location.state;

  return (
    <div className="details">
      <Link to={{ pathname: "/edit/" + item.id, state: item }}>
        <span className="ico">
          <EditTwoTone />
        </span>
      </Link>
      <img src={item.imageURL} alt={item.name}></img>

      <StarRating state={item}></StarRating>

      <div className="lineDetails"></div>

      <div className="lineDetails">
        <h1>{item.name}</h1>
      </div>
      <div className="lineDetails">
        <h3>Year : </h3>
        <h4>{item.year}</h4>
      </div>
      <div className="lineDetails">
        <h3>Director/(Network) : </h3>
        <h4>{item.derector}</h4>
      </div>
      <div className="lineDetails">
        <h3>Tags : </h3>
        <h4>{JSON.stringify(item.genres)}</h4>
      </div>
      <div>
        <h3>Summary : </h3>
        <span>
          <h5>{item.summary}</h5>
        </span>
      </div>
    </div>
  );
};
export default Details;
