const axios = require('axios');
const aws = require('aws-sdk');


exports.handler = async (event) => {
    const { Parameters } = await (new aws.SSM())
        .getParameters({
            Names: ["TELEGRAM_BOT_TOKEN", "TELEGRAM_BOT_USER_ID"].map(secretName => process.env[secretName]),
            WithDecryption: true,
        })
        .promise();

    // Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
    console.log(Parameters);
    console.log("Token name is "+process.env.TELEGRAM_BOT_TOKEN)
    
    const botReturn =  await axios.post(`https://api.telegram.org/bot${Parameters[0].Value}/sendMessage`, {
        "text": "I am telegram bot amplified",
        // "chat_id": Parameters[1].Value
        "chat_id": "@Cdechannel"
    },{
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(response=>response.data)    
    .catch(error => {
        console.error('There was an error!', error);
    });
   
    return {
        body: JSON.stringify(botReturn.result.text),
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }
    }
};
