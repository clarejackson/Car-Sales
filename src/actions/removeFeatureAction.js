export const removeFeature = featureName => {
  return { type: "REMOVE_FEATURE", payload: featureName };
}; 