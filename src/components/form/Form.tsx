import React, { ChangeEvent, SyntheticEvent, useState } from "react";

import { MovieModel } from "../../models/MovieModel";

const Form: React.FC<any> = (props: any) => {
  const [itemState, setItemState] = useState<MovieModel>(props.props);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemState({ ...itemState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  console.log(props.props);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            ID: <label>{itemState.id}</label>
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              value={itemState.name}
              onChange={handleInputChange}
              type="text"
              name="name"
            />
          </label>
        </div>
        <div>
          <label>
            year:
            <input
              value={itemState.year}
              onChange={handleInputChange}
              type="text"
              name="year"
              maxLength={4}
            />
          </label>
        </div>
        <div>
          <label>
            Derector:
            <input
              value={itemState.derector}
              onChange={handleInputChange}
              type="text"
              name="derector"
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              value={itemState.imageURL}
              onChange={handleInputChange}
              type="url"
              name="imageURL"
            />
          </label>
        </div>
        <div>
          <label>
            Categorys:
            <input
              value={itemState.genres}
              onChange={handleInputChange}
              type="text"
              name="genres"
            />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
