import React from "react";
import { Link } from "react-router-dom";

const Details: React.FC<any> = (props) => {
  var item = props.location.state;
  console.log(item);
  return (
    <div className="details">
      <Link to={{ pathname: "/edit/" + item.id, state: item }}>
        <button>Edit</button>
      </Link>
      <div className="details">
        <img src={item.imageURL} alt={item.name}></img>
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
        <div >
          <h3>Summary : </h3>
          <h5>{item.summary}</h5>
        </div>
      </div>
    </div>
  );
};
export default Details;
