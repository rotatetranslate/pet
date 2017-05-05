function randFloat(min, max, places) {
  return +((Math.random() * (max - min)) + min).toFixed(places);
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatDate(d) {
  let mo = d.getMonth() + 1;
  let day = d.getDate();
  let yr = d.getFullYear();
  let hrs = d.getHours();
  let min = d.getMinutes();
  let suffix = hrs >= 12 ? 'pm' : 'am';
  if (hrs === 0 || hrs === 12) {
    hrs -= 12;
  }
  if (min <= 9) {
    min = `0${min}`;
  }
  return `${mo}-${day}-${yr} ${Math.abs(hrs)}:${min} ${suffix}`;
}

async function getPetsFromJwt() {
  let token = sessionStorage.getItem('petToken');
  try {
    let res = await fetch('/auth/jwt', {
      method: 'post',
      headers: {
        'Authorization': `JWT ${token}`
      }
    });
    let petData = await res.json();
    return petData;
  } catch(err) {
    console.log(err);
  }
}

async function currentLocation() {
  const getLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  try {
    let location = await getLocation();
    return location;
  } catch(err) {
    throw err;
  }
}

async function currentWeather(location) {
  let {latitude: lat, longitude: lng} = location.coords;
  try {
    let res = await fetch('/pet/weather', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({lat: lat, lng: lng})
    });
    let weatherData = await res.json();
    return weatherData;
  } catch(err) {
    console.log(err);
  }
}

async function getWeather() {
  try {
    let location = await currentLocation();
    let weather = await currentWeather(location);
    return weather;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  randFloat,
  randInt,
  formatDate,
  getPets: getPetsFromJwt,
  getWeather
}
