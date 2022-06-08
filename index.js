function distanceFromHqInBlocks(begin) {
  const distance = 42;
  if (begin > distance) {
      return (begin - distance);
  } else {
      return (distance - begin);
  }
}

function distanceFromHqInFeet(begin) {
  return (parseInt(distanceFromHqInBlocks(begin), 10) * 264);
}

function distanceTravelledInFeet(begin, destination) {
  const block = 264;
  if (destination > begin) {
      return (destination - begin) * block;
  } else {
      return (begin - destination) * block;
  }
}

function calculatesFarePrice(begin, destination) {
  let distance = distanceTravelledInFeet(begin, destination);
  if (distance <= 400) {
      return 0;
  } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
      return 25;
  } else {
      return 'cannot travel that far'
  }
}