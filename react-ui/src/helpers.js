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
    // weatherData.currently.cloudCover: 0 - 1 for % of sky covered by clouds
    // weatherData.currently.precipIntensity: inches of water per hour
    // watherData.currently.icon === fog ? make it foggy
  } catch(err) {
    console.log(err);
  }
}

async function getWeather() {
  try {
    let location = await currentLocation();
    let weather = await currentWeather(location);
    return weather.currently;
  } catch(err) {
    console.log(err);
  }
}

function extractPropsFromObj(obj, ...props) {
  return Object.assign({}, ...props.map(prop => ({[prop]: obj[prop]})))
}

const phrases = {
  feed: ['yum!!', 'i want more!', 'that was tasty', '<3 burgs', 'i love burgs', 'burgs are my favorite food', 'burgs are so nutritious'],
  hungry: ['feed me !!@', 'F E E D M E', 'i\'m hungry!', 'i neED a burg'],
  sick: ['i don\'t feel so good...', 'x_x'],
  unhappy: ['i\'m bored...', 'give me attention', 'play with me !'],
  dirty: ['clean this up', 'i\'m living in filth', 'clean this, peasant', '>:('],
  clean: ['ty', 'thank you'],
  likesYou: ['i love u', 'i love you', '..................', 'how is your day going?', 'do you love me?'],
  dislikesYou: ['i hate you', 'i h8 u!!@', 'you\'re a terrible parent']
}

function randPhrase(type) {
  return phrases[type][randInt(0, phrases[type].length - 1)];
}

function wait(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000 * seconds)
  })
}

module.exports = {
  randFloat,
  randInt,
  formatDate,
  getPets: getPetsFromJwt,
  getWeather,
  extract: extractPropsFromObj,
  phrases,
  randPhrase,
  wait
}
