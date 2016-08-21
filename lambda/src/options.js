// If you setup basic auth in node-sonos-http-api's settings.json, change the username
// and password here.  Otherwise, just leave this alone and it will work without auth.
var auth = new Buffer("YOUR_USERNAME" + ":" + "YOUR_PASSWORD").toString("base64");

var options = {
  appid: "amzn1.ask.skill.89935ef1-ce66-4bb2-b81f-f63bedfe3eb9",
  host: "sonos.dyndns.org",
  port: "5005",
  headers: {
      'Authorization': 'Basic ' + auth,
      'Content-Type': 'application/json'
  },
  useHttps: false, // Change to true if you setup node-sonos-http-api with HTTPS
  rejectUnauthorized: true, // Change to false if you self-signed your certificate
};

module.exports = options;

