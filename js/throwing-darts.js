
//function accepts an array of numbers as an argument
//returns a total score using following rules:
//0 points for radius above 10
//5 points for radius between 5 and 10 inclusive
//10 points for radius less than 5

module.exports = function scoreThrows( input ) {
  var total = 0;
  var bonus = 100;

  if( Array.isArray( input ) === false ) {
    throw new TypeError( 'Input must be an array!' );
  }

  for( var i = 0; i < input.length; i++ ) {

    if( input[i] > 10 ) {
      bonus = 0;
      i++;
    } else if( input[i] > 5 ) {
      bonus = 0;
    } else if( input[i] < 0 ) {
      bonus = 0;
      input.splice( input[i], 1 );
      total -= 5;
    }

    var score = input[i] < 5  ? total += 10 : total += 5;
  }

  //if all radiuses are less than 5, award 100 bonus points
  return total + bonus;
};