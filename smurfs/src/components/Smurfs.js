import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";
import "./App.css";

const Smurfs = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  if (props.updated) {
    props.fetchSmurfs();
  }


  return (
    <div>
      {props.smurfs.map((smurf) => (
        <Smurf id={smurf.id} {...smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
    updated: state.updated,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
