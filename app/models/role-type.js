import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  roles: DS.hasMany(),
  movies: DS.hasMany(),
  department: DS.belongsTo(),
  participants: DS.hasMany()
});
