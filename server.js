const request = require('request');
const express = require('express');
const assert = require('assert');
const data = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1
});

const options = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'Content-Length': data.length
  }
};

request(options, function(err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
  console.log(json.id);
  assert.strictEqual(res.statusCode, 201);
  assert.strictEqual(json.id, 101);

});
