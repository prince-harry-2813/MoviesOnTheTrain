import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import IMovie from "../../models/Movie";
import { addToRepo } from "../../models/MovieModel";
const Form: React.FC<any> = (props: any) => {
  const [itemState, setItemState] = useState<IMovie>(props.props);

  const history = useHistory();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemState({ ...itemState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.elements);
    if (!(e.currentTarget.elements as any).name.value) {
      console.log("ERROR");
      return;
    } else {
      addToRepo(itemState);
      history.push("/");
    }
  };

  console.log(props.props);
  return (
    <form onSubmit={handleSubmit}>
      <div id="idLab">
        <label  >ID:{ itemState.id}</label>
      </div>
      <div>
        <label>
          Name:
          <input
            required={true}
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
            required={true}
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
            required={true}
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
            placeholder="categories: comma separated values "
          />
        </label>
      </div>
      <div id="submitDiv">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
