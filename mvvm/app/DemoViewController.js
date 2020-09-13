Ext.define('app.view.DemoViewController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Ext.window.MessageBox'
    ],
    alias: 'controller.demo',
    onClickButton: function () {
        Ext.Msg.prompt('提示框', '输入修改的标题', 'onConfirm', this);
    },
    onConfirm: function (btn,text) {
        if (btn === 'ok') {
           this.getView().getViewModel().set('name' , text);   					
        }
    },
	itemdblclick:function(){
		Ext.Msg.alert('标题','xxx')
	},
	onGetViewData:function(){
		console.log(this.getView().getViewModel().get('age'));
		console.log(this.getView().getViewModel().getStore('user'));
	},
	onYourChoose:function( combo, record, eOpts){
		Ext.getCmp('lblYourChoose').setValue(record.get('name'));
	}
});
