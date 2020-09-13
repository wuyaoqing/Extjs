  Ext.define('app.view.UserModel', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id',type:'int'},
		{name: 'username',type:'string'},
		{name: 'realname',type:'string'},
		{name: 'hiredate',type:'date'},
		{name: 'phone',type:'string'},
		{name: 'state',type:'boolean'}
	]
});