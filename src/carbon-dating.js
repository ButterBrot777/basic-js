const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || /([A-Za-z])\w+/g.test(sampleActivity) 
  || (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)) return false;
  let inputActivity = parseFloat(sampleActivity);
  let result = 0;
  result = Math.ceil(Math.log((MODERN_ACTIVITY / inputActivity)) / (0.693 / 5730));
  return result;
};
