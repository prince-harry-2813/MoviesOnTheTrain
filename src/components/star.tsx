import React from "react";
import { addToRepo } from "../models/MovieModel";

const Star = ({ marked, starId }: any) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

const StarRating: React.FC<any> = (props) => {
  const [rating, setRating] = React.useState(parseInt(props.state.rating) || 0);
  const [selection, setSelection] = React.useState(0);

  const hoverOver = (event: any) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id"))
      val = event.target.getAttribute("data-star-id");
    setSelection(val);
  };
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={(e: any) => {
        setRating(e.target.getAttribute("data-star-id") || rating);
        props.state.rating = e.target.getAttribute("data-star-id");
        addToRepo(props.state);
      }}
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};
export default StarRating;
