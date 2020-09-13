Ext.define('mvc.controller.Demo', {
    extend: 'Ext.app.Controller',
    //查找绑定的界面控件
    refs: [{
        ref: 'demo', //生成get方法的方法名
        selector: 'demo' //组件的xtype
    }],
	models: ['Demo'],
	//与model绑定
    stores: ['Demo'],
	//将界面控件与方法绑定
    init: function() {
        this.control({
            'demo button[action=updatePanelBody]': 
			{
                click: this.onDemoUpdate
            },
			 'demo button[action=testMsg]': {
				click: this.onTestMsg
			 }
        });
    },
    /* 方法*/
	onDemoUpdate: function() {
		this.getDemo().setHtml('body update');
	},
	onTestMsg: function() {
		 Ext.Msg.alert('Status', 'Changes saved successfully.');
	}
});
