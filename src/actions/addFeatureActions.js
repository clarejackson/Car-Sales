export const addFeature = featureName => {
  return { type: "ADD_FEATURE", payload: featureName };
};