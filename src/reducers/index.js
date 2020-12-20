import { combineReducers } from 'redux';
import { addFeatureReducer } from './addFeatureReducer'
import { removeFeatureReducer } from './removeFeatureReducer'


export const rootReducer = combineReducer({
    addFeature: addFeatureReducer,
    removeFeature: removeFeatureReducer
})