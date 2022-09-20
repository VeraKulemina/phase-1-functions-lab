// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let address = 42;
    if (blocks <= address ) {
      return address - blocks;
    } else if (blocks >= address) {
       return blocks - address;
    }
} 


function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
    
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) *264;
    } else {
        return (start - destination) * 264; 
    }
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    let addressDistance = distanceTravelledInFeet(start, destination);
    if (addressDistance <=400) {
        return 0;
    } else if (addressDistance >=400 && addressDistance <=2000) {
        return 0.02 * (addressDistance - 400);
    } else if (addressDistance > 2000 && addressDistance < 2500) {
        return 25;
    } else if (addressDistance > 2500) {
        return "cannot travel that far";
    }
    }
    
     
  