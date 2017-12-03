import $ from 'jquery';

export default {
  url: 'https://crime-overwatch-api.herokuapp.com',

  getFeaturedCrimes: function() {
    return $.ajax({
      url: this.url + '/featured_crimes',
      method: 'GET'
    }).done(function(data) {
      return data;
    })
  },
}