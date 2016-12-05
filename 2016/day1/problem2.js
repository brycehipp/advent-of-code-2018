var coords = [ 1, 1 ];
var currentDirection = 'N';
var instructions = [ 'L5', 'R1', 'R3', 'L4', 'R3', 'R1', 'L3', 'L2', 'R3', 'L5', 'L1', 'L2','R5', 'L1', 'R5',
             'R1', 'L4', 'R1', 'R3', 'L4', 'L1', 'R2', 'R5', 'R3', 'R1', 'R1', 'L1', 'R1', 'L1', 'L2',
             'L1', 'R2', 'L5', 'L188', 'L4', 'R1', 'R4', 'L3', 'R47', 'R1', 'L1', 'R77', 'R5', 'L2', 'R1',
             'L2', 'R4', 'L5', 'L1', 'R3', 'R187', 'L4', 'L3', 'L3', 'R2', 'L3', 'L5', 'L4', 'L4', 'R1',
             'R5', 'L4', 'L3', 'L3', 'L3', 'L2', 'L5', 'R1', 'L2', 'R5', 'L3', 'L4', 'R4', 'L5', 'R3',
             'R4', 'L2', 'L1', 'L4', 'R1', 'L3', 'R1', 'R3', 'L2', 'R1', 'R4', 'R5', 'L3', 'R5', 'R3',
             'L3', 'R4', 'L2', 'L5', 'L1', 'L1', 'R3', 'R1', 'L4', 'R3', 'R3', 'L2', 'R5', 'R4', 'R1',
             'R3', 'L4', 'R3', 'R3', 'L2', 'L4', 'L5', 'R1', 'L4', 'L5', 'R4', 'L2', 'L1', 'L3', 'L3',
             'L5', 'R3', 'L4', 'L3', 'R5', 'R4', 'R2', 'L4', 'R2', 'R3', 'L3', 'R4', 'L1', 'L3', 'R2',
             'R1', 'R5', 'L4', 'L5', 'L5', 'R4', 'L5', 'L2', 'L4', 'R4', 'R4', 'R1', 'L3', 'L2', 'L4', 'R3' ];
var completedInstructions = {};
var destination = [];

function turnLeft() {
  switch( currentDirection ) {
    case 'N':
      currentDirection = 'W';
      break;
    case 'W':
      currentDirection = 'S';
      break;
    case 'S':
      currentDirection = 'E';
      break;
    case 'E':
      currentDirection = 'N';
      break;
  }
}
function turnRight() {
  switch( currentDirection ) {
    case 'N':
      currentDirection = 'E';
      break;
    case 'W':
      currentDirection = 'N';
      break;
    case 'S':
      currentDirection = 'W';
      break;
    case 'E':
      currentDirection = 'S';
      break;
  }
}
function move( direction, steps ) {
  if ( direction === 'L' ) turnLeft();
  if ( direction === 'R' ) turnRight();

  for ( var i = 0 ; i < steps ; i++ ) {
    switch( currentDirection ) {
      case 'N':
        coords[0]++;
        break;
      case 'W':
        coords[1]--;
        break;
      case 'S':
        coords[0]--;
        break;
      case 'E':
        coords[1]++;
        break;
    }
    var coordsString = coords.toString();
    if ( !completedInstructions[coordsString] ) completedInstructions[coordsString] = 0;

    completedInstructions[coordsString]++;

    if ( completedInstructions[coordsString] === 2 && !destination.length ) {
      destination = coordsString.split(',');
    }
  }
}

instructions.forEach((item) => {
  var direction = item.substring( 0, 1 ),
      steps = Number( item.substring(1) );

  move( direction, steps );

});

var distance = Math.abs(1-coords[0]) + Math.abs(1-coords[1]);
console.log( 'Old distance: ' + distance );

var newDistance = Math.abs(1-destination[0]) + Math.abs(1-destination[1]);
console.log( 'New Distance: ' + newDistance );
