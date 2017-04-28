function randFloat(min, max, places) {
  return +((Math.random() * (max - min)) + min).toFixed(places);
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPetsFromJwt(cb) {
  let token = sessionStorage.getItem('petToken');
  fetch('/auth/jwt', {
    method: 'post',
    headers: {
      'Authorization': `JWT ${token}`
    }
  })
  .then(res => res.json())
  .then(data => cb(data))
  .catch(err => console.log(err))
}

function formatDate(d) {
  let mo = d.getMonth();
  let day = d.getDate();
  let yr = d.getFullYear();
  let hrs = d.getHours();
  let suffix = 'am';
  if (hrs > 12) {
    hrs-= 12;
    suffix = 'pm';
  }
  let min = d.getMinutes();
  if (min.toString().length < 2) {
    min = `0${min}`;
  }
  return `${mo}-${day}-${yr} ${hrs}:${min} ${suffix}`;
}

module.exports = {
  randFloat,
  randInt,
  getPets: getPetsFromJwt,
  formatDate
}
