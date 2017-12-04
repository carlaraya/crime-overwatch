import $ from 'jquery';

export default {
  //url: 'https://crime-overwatch-api.herokuapp.com',
  url: 'http://192.168.99.100:3000',

  getFeaturedCrimes: function() {
    return $.ajax({
      url: this.url + '/featured_crimes',
      method: 'GET'
    }).done(function(data) {
      return data;
    })
  },

  getPoliceStations: function() {
    return $.ajax({
      url: this.url + '/police_stations',
      method: 'GET'
    }).done(function(data) {
      return data;
    })
  },

  getPoliceStation: function(id) {
    return $.ajax({
      url: this.url + '/police_stations/' + id,
      method: 'GET'
    }).done(function(data) {
      return data;
    })
  },

  getMostWanted: function() {
    return $.ajax({
      url: this.url + '/most_wanteds',
      method: 'GET'
    }).done(function(data) {
      return data;
    })
  },
}