import { combineReducers } from 'redux';
import { addFeatureReducer } from './addFeatureReducer'
import { removeFeatureReducer } from './removeFeatureReducer'


export const rootReducer = combineReducers({
    addFeature: addFeatureReducer,
    removeFeature: removeFeatureReducer
})

