const _ = require('underscore');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const instaPhotos = require('../index.js');
const secrets = require('../src/secrets.js');
const res = require('./photos.js');

// set up mock api
const mock = new MockAdapter(axios);
const base = 'https://api.instagram.com/v1';
const endpoint = 'users/' + secrets.userId + '/media/recent';
const mediaQuery = '?access_token=' + secrets.accessToken;
const apiUrl = base + '/' + endpoint + mediaQuery;

mock.onGet(apiUrl).reply(200, res);

let options =  {};
beforeEach(function() {
    options = {};    
});
describe('Instagram Photos', function() {
    it('gets recent Instagram Photos', function() {
        instaPhotos.getPhotos(options).then(res => {
            assert.equal(res.items.length, 2);
        });
    });
});