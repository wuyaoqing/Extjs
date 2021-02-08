Ext.define('app.view.DemoViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.DemoViewModel',
    data: {
        name: '标题',
		age:18,
		comboTitle:'下拉框标题',
		bDelete:true
    },
	stores:{
		user:{
			fields:[ 'value', 'text'],
			data: []
		}
	}
});
 