function getWeather () {
  return new Promise(function (resolve, reject) {
    reject({ status: 200, body: 'Hello, World!' });
  });
}

const promise = getWeather();
console.log(promise.then(function (data) {
  console.log(data);
},
function (data) {
  console.log(`Second param ${data}`);
}
));
