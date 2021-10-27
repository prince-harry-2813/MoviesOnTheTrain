import { Link } from "react-router-dom";

const Item = ({ props }: any) => {;
  const imagePath = props.imageURL ? props.imageURL : "";
  return (
    <div>
      <div className="list-item">
        <Link to={{ pathname: "/details/" + props.id, state: props }}>
          <img className="list-item-img" src={imagePath} alt={props.name}></img>
          <div className="list-item-det">
            <h4 className="list-item-name">{props.name}</h4>
            {(props.summary as string)
              .slice(
                0,
                (props.summary as string).length > 100
                  ? 100
                  : (props.summary as string).length - 1
              )
              .trim() + "..."}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
