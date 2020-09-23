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
			fields:[ 'name', 'text'],
			data: [
				{ name: 'Lisa', text: '丽萨' },
				{ name: 'Leijun', text: '雷军' }
			]
		}
	}
});
 