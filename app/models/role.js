import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  roleType: DS.belongsTo(),
  movie: DS.belongsTo(),
  participant: DS.belongsTo()
});
