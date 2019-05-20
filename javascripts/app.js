//William Bennett Iron Hack 2019 Mars Rover


class Rover {

  constructor(direction, MoveX, MoveY, travelLog) {
    this.direction = 'N';
    this.MoveX = 0;
    this.MoveY = 0;
    this.travelLog = [];

  }

  turnLeft(marsRover) {


    switch (marsRover.direction.toUpperCase()) {
      case "N":
        marsRover.direction = "W";
        break;
      case "W":
        marsRover.direction = "S";
        break;
      case "S":
        marsRover.direction = "E";
        break;
      case "E":
        marsRover.direction = "N";
        break;


    }


    console.log(marsRover.direction);
    marsRover.travelLog.push(marsRover.direction);
  }

  turnRight(marsRover) {


    switch (marsRover.direction.toUpperCase()) {
      case "N":
        marsRover.direction = "E";
        break;
      case "E":
        marsRover.direction = "S";
        break;
      case "S":
        marsRover.direction = "W";
        break;
      case "W":
        marsRover.direction = "N";
        break;

    }


    console.log(marsRover.direction);
    marsRover.travelLog.push(marsRover.direction);

  }

  moveForward(marsRover) {

    if (marsRover.direction === "W") {
      marsRover.MoveX -= 1;
    } else if (marsRover.direction === "N") {
      marsRover.MoveY -= 1;
    } else if (marsRover.direction === "S") {
      marsRover.MoveY += 1;
    } else if (marsRover.direction === "E") {
      marsRover.MoveX += 1;
    }

    console.log("x" + " " + marsRover.MoveX, "y" + " " + marsRover.MoveY);

    marsRover.travelLog.push("x" + " " + marsRover.MoveX + " " + "y" + " " + marsRover.MoveY);

    //marsRover.travelLog.push(`x${marsRover.MoveX} y${marsRover.MoveY}`);

  }

  static moveIt(operator) {

    let x = operator.toUpperCase().split('');
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "L") {

        marsRover.turnLeft(marsRover);

      } else if (x[i] === "R") {

        marsRover.turnRight(marsRover);
      } else if (x[i] === "F") {

        marsRover.moveForward(marsRover);

      } else if (x[i] === "B") {

        marsRover.backUp(marsRover);
      } else {
        console.log("Please Enter A Correct Value ")
      }

    }
  }

  backUp(marsRover) {

    if (marsRover.direction === "W") {
      marsRover.MoveX += 1;
    } else if (marsRover.direction === "N") {
      marsRover.MoveY += 1;
    } else if (marsRover.direction === "S") {
      marsRover.MoveY -= 1;
    } else if (marsRover.direction === "E") {
      marsRover.MoveX -= 1;
    }

    console.log("x" + " " + marsRover.MoveX, "y" + " " + marsRover.MoveY);

    marsRover.travelLog.push("x" + " " + marsRover.MoveX, "y" + " " + marsRover.MoveY);

  }

} //End


//New Object
const marsRover = new Rover();

//Static 
Rover.moveIt("rffffrrlf");

//marsRover.direction="E";

//marsRover.moveForward(marsRover);

//marsRover.backUp(marsRover);

//console.log(marsRover.travelLog)

//console.log(marsRover)