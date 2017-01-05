import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  roleType: DS.attr('string'),
  movie: DS.belongsTo(),
  department: DS.belongsTo(),
  participant: DS.belongsTo()
});
