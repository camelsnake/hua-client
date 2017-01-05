import Ember from 'ember';

export default Ember.Component.extend({
  roles: undefined,
  departments: undefined,
  movieDepartmentRoles: Em.computed('departments', 'roles', function() {
    let departments = this.get('departments');
    let roles = this.get('roles');
    
    return departments.map(department => {
      let movieDepartmentRoles = roles.filter(role => {
        return role.get('department.id') === department.get('id');
      });
      
      return Em.ObjectProxy.create({
        content: department,
        roles: movieDepartmentRoles
      });
    });
  })
});