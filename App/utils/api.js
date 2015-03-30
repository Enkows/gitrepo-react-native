// access token
var ACCESS_TOKEN;
var BASE_URL = 'https://api.github.com';

module.exports = function (path) {
  var url = `${BASE_URL}/${path}`;
  if (ACCESS_TOKEN) { url = `${url}?access_token=${ACCESS_TOKEN}`; }
  return url;
};