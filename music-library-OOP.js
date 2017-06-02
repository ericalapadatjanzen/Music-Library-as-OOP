var Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};

var Playlist = function(name) {
  this.name = name;
  this.tracks = [];
};

Playlist.prototype.overallRating = function() {
  var ratings = this.tracks.map(track => track.rating);
  return (
    ratings.reduce(function(a, b) {
      return a + b;
    }) / ratings.length
  );
};

Playlist.prototype.totalDuration = function() {
  var lengths = this.tracks.map(track => track.length);
  return lengths.reduce(function(a, b) {
    return a + b;
  });
};

var Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
};

var library = new Library("My Library", "Erica");
var playlist1 = new Playlist("My Playlist");
library.playlists.push(playlist1);

playlist1.tracks.push(new Track("Song 1", 1, 120));
playlist1.tracks.push(new Track("Song 2", 2, 200));
playlist1.tracks.push(new Track("Song 3", 3, 250));

var duration = playlist1.totalDuration();
var rating = playlist1.overallRating();

// To do:
// Playlist objects can be added to an instance of a library
// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
