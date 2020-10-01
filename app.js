const request = require('request');
const express = require('express')
let NodeJson = require('./indexJson');
//const requests = require('supertest');
const app = express();
const assert = require('assert');

console.log(NodeJson);
// run json copy file code
NodeJson.jsonParse();


//api for question 5
app.get('/api/question/5', function (req, res) {
    const options = {
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
        }
    };
    request(options, function (err, response, body) {
        let json = JSON.parse(body);
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(json.id, 1);
        res.json( json );
    });
 })

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
