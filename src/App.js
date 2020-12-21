import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addFeature } from './actions/addFeatureActions'
import { removeFeature } from './actions/removeFeatureAction'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const [newFeature, setNewFeature] = useState('');

  //Change handler?
  const handleChanges = e => {
    setNewFeature(e.target.value)
  }
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//mapStateToProps?
const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

//mapDispatchToProps?

//add connect here
export default connect(mapStateToProps)(App);
