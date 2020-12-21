import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from './actions/addFeatureActions'
import { removeFeature } from './actions/removeFeatureAction'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  //Change handler?

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

//mapDispatchToProps?

//add connect here
export default App;
