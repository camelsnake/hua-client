import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  departments: DS.hasMany(),
  roleTypes: DS.hasMany(),
  roles: DS.hasMany(),
  participants: DS.hasMany(),
  authors: DS.hasMany('participant')
});
