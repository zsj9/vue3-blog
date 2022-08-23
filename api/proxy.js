const request = require('request');

module.exports = (req, res) => {
  // proxy middleware options
  let prefix = "/api"
  if (!req.url.startsWith(prefix)) {
    return;
  }
  let target = "https://node-server-puce.vercel.app" + req.url;

  const options = {
    'method': 'POST',
    'url': target,
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(response.body);
    res.end();
  });
}