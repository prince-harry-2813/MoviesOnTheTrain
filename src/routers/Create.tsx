import React from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "../components/form/Form";
import { MovieModel } from "../models/MovieModel";

const Create: React.FC = () => {
  var newItem: MovieModel = { id: uuidv4() };
  return (
    <div className="formContainer">
      <Form props={newItem}></Form>
    </div>
  );
};

export default Create;
