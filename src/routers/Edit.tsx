import React from "react";
import Form from "../components/form/Form";

const Edit: React.FC<any> = (props) => {
  return (
    <div className="formContainer">
      <Form props={props.location.state}></Form>
    </div>
  );
};

export default Edit;
