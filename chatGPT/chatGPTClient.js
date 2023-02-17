const axios = require("axios");

const fs = require("fs");
const path = require("path");
const configPath = path.join(__dirname,'config.json');
const config = JSON.parse(fs.readFileSync(configPath,'utf-8'))
const OPENAI_API_KEY = config.OPENAI_API_KEY;

let url="https://api.openai.com/v1/completions"

axios({
    method:'post',
    url : url,
    headers:{
        'Content-Type' :'application/json',
        'Authorization' : "Bearer" + OPENAI_API_KEY,

    },
    data : {
        model : "text-davinci-003",
        promotp : "Deepak :" + "hello" + "\nBot:",
        temperature:0.7,
        max_tokens : 500
    }
}).then(response =>{
    let res = response.data.choices[0].text;
    console.log(res)
    // res = 
})