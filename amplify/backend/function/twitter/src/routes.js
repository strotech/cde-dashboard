const aws = require('aws-sdk');
const util = require("util");
const request = require("request");
const post = util.promisify(request.post);
const get = util.promisify(request.get);

module.exports = async function(app){
  const { Parameters } =  await (new aws.SSM())
  .getParameters({
    Names: ["TWITTER_BEARER_TOKEN"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

//Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]



// Twitter specific code 
const BEARER_TOKEN = Parameters[0].Value;



const rulesURL = new URL(
  "https://api.twitter.com/2/tweets/search/stream/rules"
);




const authMessage = {
  title: "Could not authenticate",
  details: [
    `Please make sure your bearer token is correct. 
      If using Glitch, remix this app and add it to the .env file`,
  ],
  type: "https://developer.twitter.com/en/docs/authentication",
};





app.get("/api/rules", async (req, res) => {
  if (!BEARER_TOKEN) {
    res.status(400).send(authMessage);
  }

  const token = BEARER_TOKEN;
  const requestConfig = {
    url: rulesURL,
    auth: {
      bearer: token,
    },
    json: true,
  };

  try {
    const response = await get(requestConfig);
    console.log("hi",response)
    if (response.statusCode !== 200) {
      if (response.statusCode === 403) {
        res.status(403).send(response.body);
      } else {
        throw new Error(response.body.error.message);
      }
    }
    res.send(response);
  } catch (e) {
    res.send(e);
  }
});


app.post("/api/rules", async (req, res) => {
  if (!BEARER_TOKEN) {
    res.status(400).send(authMessage);
  }

  const token = BEARER_TOKEN;
  const requestConfig = {
    url: rulesURL,
    auth: {
      bearer: token,
    },
    json: req.body,
  };

  try {
    const response = await post(requestConfig);

    if (response.statusCode === 200 || response.statusCode === 201) {
      res.send(response);
    } else {
      throw new Error(response);
    }
  } catch (e) {
    res.send(e);
  }
});

  app.post("/api/tweets", async (req, res) => {
    res.json({data:{id:1,content:"hi tweet"}})
  });
}
