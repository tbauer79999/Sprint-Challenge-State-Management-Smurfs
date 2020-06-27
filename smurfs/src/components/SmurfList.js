import React, { useContext } from "react";
import ContextSmurf from "./context/ContextSmurf";


export default function Smurfs() {
  const { smurfs } = useContext(ContextSmurf);
  return (
    <div>
      <h1>Smurfs Population</h1>
      <div>
      {smurfs.map((smurfs) => {
            return <h4>{smurfs.smurfs}</h4>;
          })}
   
      </div>
    </div>
  );
}
