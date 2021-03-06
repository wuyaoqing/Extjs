Ext.define('MyApp.controller.UserController', {
    extend: 'Ext.app.Controller',
	alias:'controller.usercontroller',
    stores: ['UserStore'],
    models: ['UserModel','User2'],
    views: ['UserList', 'UserEdit'],
    init: function () {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
			'userlist [action=testclick]': {
			    click: this.testclick
			},
            'useredit button[action=save]': {
                click: this.saveUser
            }
        });
    },
    editUser: function (grid, record) {
        var win = Ext.widget("useredit"); 
        win.down("form").loadRecord(record);
        win.show();
    },
    saveUser: function (btn) {
        var win = btn.up("window"),
            form = win.down("form"),
            record = form.getRecord();
        form.updateRecord();
        record.commit();
        win.close();
    },
	testclick:function(){
		alert('test')
	}
});

