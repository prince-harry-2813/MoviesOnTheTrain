import React from "react";
const Footer: React.FC = () => {
  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <label>
        {
          <a href={"https://www.linkedin.com/in/arie-rosental"}>
            Arie Rosental
          </a>
        }
      </label>
    </div>
  );
};

export default Footer;
