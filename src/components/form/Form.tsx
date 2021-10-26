import Reactת, {useState } from "react";
import Edit from "../../routers/Edit";
import MovieModel from "../../models/MovieModel";
import React from "react";


const Form: React.FC = (Props)=> {

  return (
    <div>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
          };
          const email = target.email.value; // typechecks!
          const password = target.password.value; // typechecks!
          // etc...
        }}
      >
        <div>
          <label>
            ID:
            <input type="number" name="id" disabled={true} />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            year:
            <input type="text" name="year" maxLength={4} />
          </label>
        </div>
        <div>
          <label>
            Derector:
            <input type="text" name="derector" />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input type="url" name="imageUrl" />
          </label>
        </div>
        <div>
          <label>
            Categorys:
            <input type="text" name="Category" />
          </label>
        </div>
        <div>
          <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
  );
};

export default Form;
