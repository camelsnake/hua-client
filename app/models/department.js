import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  movies: DS.hasMany(),
  roles: DS.hasMany(),
  roleTypes: DS.hasMany(),
  participants: DS.hasMany()
});
