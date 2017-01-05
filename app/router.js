import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  this.route('movies', {path: 'movies'}, function() {
    this.route('movie', {path: ':id', resetNamespace: true});
  });
  this.route('authors');
  this.route('departments');
});

export default Router;
