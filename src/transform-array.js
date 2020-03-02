module.exports = function transform(arr) {
  if( !Array.isArray(arr) ) throw new Error('input is not array');

  let result = [];

  for( let i = 0; i < arr.length; i++) {
    if(
      arr[i] !== '--discard-next' 
      && (i === 0 || arr[i-1] !== '--discard-next')
      && arr[i] !== '--discard-prev' 
      && arr[i] !== '--double-next' 
      && arr[i] !== '--double-prev') { 
        result.push(arr[i]);
    } else if( arr[i] == '--discard-prev' ) { //ok
        if( i > 0 ) { result.pop() };
    } else if( arr[i] == '--double-next') { //ok
        if(arr.length - 1 > i)
      { result.push(arr[i+1]) };
    } else if( arr[i] == '--double-prev') { //ok
      if( i > 0 ) { result.push(arr[i-1]) };
    };
  };
  return result;
};
