import React from "react";

const Smurf = (props) => {
 

  return (
    <div>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
      <br /><br /><br />
    </div>
  );
};

export default Smurf;
