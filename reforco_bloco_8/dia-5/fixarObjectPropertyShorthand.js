const getPosition = (latitude, longitude, code) => code === 1 ?
  {code: 'emergency', latitude, longitude} : {code, latitude, longitude};
console.log(getPosition(-19.81, -43.95, 2))