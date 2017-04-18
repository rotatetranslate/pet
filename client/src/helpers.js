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
  .then(pets => cb(pets))
  .catch(err => console.log(err))
}

module.exports = {
  randFloat,
  randInt,
  getPets: getPetsFromJwt
}
