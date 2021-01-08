import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from './actions/addFeatureActions'
import { removeFeature } from './actions/removeFeatureAction'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  console.log(props)
  const removeFeature = item => {
    console.log("remove", item);
    props.removeFeature(item)
  };

  const addFeature = item => {
    console.log("add", item);
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header  car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//mapStateToProps?
const mapStateToProps = state => {
  console.log(state.addFeature)
  return {
    additionalPrice: state.addFeature.additionalPrice,
    car: state.addFeature.car,
    additionalFeatures: state.addFeature.additionalFeatures
  };
};

//mapDispatchToProps?

//add connect here
export default connect(mapStateToProps, { addFeature, removeFeature })(App);
