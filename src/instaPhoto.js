const axios = require('axios');
const _ = require('underscore');

function getPhotos(options) {
    const base = 'https://api.instagram.com/v1';
    const endpoint = 'users/' + options.userId + '/media/recent';
    const mediaQuery = '?access_token=' + options.accessToken;
    return axios.get(base + '/' + endpoint + mediaQuery)
        .then(function (data) {
            // filter out videos
            return _.filter(data.data.data, (photo) => {
                return photo.type === 'image';
            });
        })
        .catch(function (error) {
            return res.json(error);
        });
}

module.exports = { getPhotos };