import $ from 'jquery';

export default {
  url: 'https://crime-overwatch-api.herokuapp.com',
  //url: 'http://192.168.99.100:3000',
  auth: '',
  username: '',
  id: 0,
  crimeTypes: ["Murder","Homicide","Physical Injury","Rape","Robbery","Theft","Carnapping","Cattle Rustling"],

  login: function(username, password) {
    return $.ajax({
      url: this.url + '/authenticate',
      method: 'POST',
      data: {
        username: username,
        password: password
      }
    }).done(function(data) {
      this.username = username
      this.id = data.id
      this.auth = data.auth_token
      return data.auth_token
    }.bind(this))
  },

  logout: function() {
    this.auth = ''
    this.username = ''
    this.id = 0
  },

  getFeaturedCrimes: function() {
    return $.ajax({
      url: this.url + '/featured_crimes',
      method: 'GET'
    }).done(function(data) {
      return data;
    })
  },

  updateFeaturedCrime: function(article, id) {
    return $.ajax({
      url: this.url + '/featured_crimes/' + id,
      method: 'PATCH',
      data: article,
      headers: {Authorization: this.auth}
    }).done(function(data) {
      return data;
    })
  },

  createFeaturedCrime: function(article) {
    article.police_station_id = this.id
    return $.ajax({
      url: this.url + '/featured_crimes',
      method: 'POST',
      data: article,
      headers: {Authorization: this.auth}
    }).done(function(data) {
      return data;
    })
  },

  deleteFeaturedCrime: (id) => {
    return $.ajax({
      url: 'https://crime-overwatch-api.herokuapp.com/featured_crimes/' + id,
      method: 'DELETE',
      headers: {Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJwb2xpY2Vfc3RhdGlvbl9pZCI6MSwiZXhwIjoxNTEyNDg4NjI4fQ.cLx5Re6JVdNM5MCk7fLhVoSelC6PK_xFmGseTCHlBUY'}
    }).done(function(data) {
      return data;
    }.bind(this))
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

  updateMostWanted: function(mw, id) {
    return $.ajax({
      url: this.url + '/most_wanteds/' + id,
      method: 'PATCH',
      data: mw,
      headers: {Authorization: this.auth}
    }).done(function(data) {
      return data;
    })
  },

  createMostWanted: function(mw) {
    return $.ajax({
      url: this.url + '/most_wanteds',
      method: 'POST',
      data: mw,
      headers: {Authorization: this.auth}
    }).done(function(data) {
      return data;
    }.bind(this))
  },


  deleteMostWanted: (id) => {
    return $.ajax({
      url: 'https://crime-overwatch-api.herokuapp.com/most_wanteds/' + id,
      method: 'DELETE',
      headers: {Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJwb2xpY2Vfc3RhdGlvbl9pZCI6MSwiZXhwIjoxNTEyNDg4NjI4fQ.cLx5Re6JVdNM5MCk7fLhVoSelC6PK_xFmGseTCHlBUY'}
    }).done(function(data) {
      return data;
    }.bind(this))
  },


  getCrimeTypes: function() {
    return $.ajax({
      url: this.url + '/crime_types',
      method: 'GET'
    }).done(function(data) {
      this.crimeTypes = data.map(x => x.name)
      return data
    })
  }
}