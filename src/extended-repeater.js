module.exports = function repeater(str, options) {
  let arrayWithString = [],
      arrayWithAddition = [],
      resString = [],
      result = ''
      ;
  if( str === null) { //check type of input string;
    str = 'null';
  }
  arrayWithString.push(str);

  if(options.repeatTimes === 1 && !options.addition) { //when addition isn't given;
    return str;
  }
  if( typeof options.addition === 'boolean') { //check type of input addition;
    if( options.addition === true ) {
      options.addition = 'true'
    } else {
      options.addition = 'false'
    }
  }
  if( options.addition === null) {
    options.addition = 'null'
  }

  if( options.addition ) { //when addition is given;
    arrayWithAddition.push(options.addition);
    if( options.additionRepeatTimes && options.additionRepeatTimes >=2 ) {
      arrayWithAddition = repeat(arrayWithAddition, options.additionRepeatTimes);
    }
    if( options.additionSeparator ) {
      arrayWithString.push(arrayWithAddition.join(options.additionSeparator))
    } else {
      arrayWithString = arrayWithString.concat(arrayWithAddition);
    }
  }
  resString.push(arrayWithString.join(''));
  if( options.repeatTimes && options.repeatTimes >=2 ) { //when repeatTimes is bigger then 1;
    resString = repeat(resString, options.repeatTimes);
    if( options.separator ) {
      result = resString.join(options.separator)
    } else {
      result = resString.join('+')
    }
  } else {
    result = resString[0];
  }
  return result;
};

function repeat(arr, num) { //function for making copies of array elements
  let res = [];
  res = arr.map((elem) => res.concat(Array(num).fill(elem)));
  const flattened = res.reduce((a, b) => a.concat(b));
  return flattened;
}