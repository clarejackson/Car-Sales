export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = (featureName) => {
  console.log(featureName)
  return { type: REMOVE_FEATURE, payload: featureName };
}; 