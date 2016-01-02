var chai = require( 'chai' );
var mocha = require( 'mocha' );
var expect = chai.expect;
var scoreThrows = require( './../js/throwing-darts.js' );
chai.should();

describe( 'scoreThrows', function() {
  it( 'should exist', function() {
    expect( scoreThrows ).to.exist;
    expect( scoreThrows ).to.be.a( 'function' );
  });

  it( 'should throw an error if argument is not an array', function() {
    var boundFn = scoreThrows.bind( null, '3' );
    expect( boundFn ).to.throw( TypeError, 'Input must be an array!' );

    var boundFn1 = scoreThrows.bind( NaN, '3' );
    expect( boundFn1 ).to.throw( TypeError, 'Input must be an array!' );
  });

  it( 'should return a number', function() {
    var result = scoreThrows( [ 1, 3, 11] );

    expect( result ).to.be.a( 'number' );
    expect( result ).to.be.equal( 20 );
  });

});