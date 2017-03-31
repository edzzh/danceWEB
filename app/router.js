import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('gallery', {path: '/gallery'});
  this.route('schedule', {path: '/schedule'});
  this.route('contact', {path: '/contact'});
  //this.route('members', {path: '/members'});
});

export default Router;
