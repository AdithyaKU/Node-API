const request = require('request');
const express = require('express');
const assert = require('assert');


const options = {
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
  }
};

request(options, function(err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
  console.log(json.id);
  assert.strictEqual(res.statusCode, 200);
  assert.strictEqual(json.id, 1);

});
