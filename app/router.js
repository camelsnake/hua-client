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

  this.route('departments', {path: 'departments'}, function() {
    this.route('department', {path: ':id', resetNamespace: true});
  });

  this.route('participants', {path: 'participants'}, function() {
    this.route('participant', {path: ':id', resetNamespace: true});
  });
});

export default Router;
