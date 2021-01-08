import React from 'react';
import { removeFeature } from "../actions/removeFeatureAction";
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick={(e) => {
        e.preventDefault()
        props.removeFeature(props.feature)
      }}
      >
        X
        </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
