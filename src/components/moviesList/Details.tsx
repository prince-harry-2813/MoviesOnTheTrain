import React from "react";
import { useParams } from "react-router";
interface props {}
const regex: RegExp = /<(“[^”]*”|'[^’]*’|[^'”>])*>/g; // clean summery from tags

const Details: React.FC<any> = (props) => {
  const item = props.location.state;
  console.log(item);
  return (
    <div>
      <div className= "details">
        <img src={item.imageURL} alt={item.name}></img>
        <div>
          <h1>{item.name}</h1>
        </div>
        <div>
          <h4>Year: {item.year}</h4>
        </div>
        <div>
          <h4>Director (Network): {item.derector}</h4>
        </div>
        <div>
          <h4>Tags: {item.genres}</h4>
        </div>
        <div>
          <h4>Summary {item.summary}</h4>
        </div>
        
      </div>
    </div>
  );
};
export default Details;
