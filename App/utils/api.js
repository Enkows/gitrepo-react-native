// access token
var {access_token, base_url } = require('./config');

module.exports = function (path) {
  console.log(path);
  var url = `${base_url}/${path}`;
  if (access_token) { url = `${url}?access_token=${access_token}`; }
  return url;
};