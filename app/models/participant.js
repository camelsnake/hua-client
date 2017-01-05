import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  name: DS.attr('string'),
  movies: DS.hasMany({inverse: 'participants'}),
  roles: DS.hasMany(),
  departments: DS.hasMany()
});
