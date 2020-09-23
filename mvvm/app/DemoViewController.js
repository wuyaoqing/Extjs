Ext.define('app.view.DemoViewController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Ext.window.MessageBox'
    ],
    alias: 'controller.DemoViewController',
	onAddComboData:function(){
		//动态增加数据
		var userstore = this.getView().getViewModel().get('user');
		userstore.add({ name: 'mayun', text: '马云' })
	},
	onLoadMask:function(){
		var usergrid = Ext.getCmp('usergrid');
		 var myMask = new Ext.LoadMask({
		     msg    : '正在加载...',
		     target : usergrid
		 });
		 myMask.show();
	 },
    onClickButton: function () {
        Ext.Msg.prompt('提示框', '输入修改的标题', 'onConfirm', this);
    },
    onConfirm: function (btn,text) {
        if (btn === 'ok') {
			//this:当前的viewcontroller
			//this.getView() 表示当前控制器控制下的View类实例。
			//this.getView().getViewModel()表示该view实例绑定的Model。
           this.getView().getViewModel().set('name' , text);   					
        }
    },
	itemdblclick:function(){
		Ext.Msg.alert('标题','xxx')
	},
	onGetViewData:function(){
		console.log(this.getView().getViewModel().get('bDelete'));
		//Returns :String
		console.log(Ext.util.Format.number(123456.789,'0,000.00'));
		//console.log(this.getView().getViewModel().getStore('user'));
	},
	onYourChoose:function( combo, record, eOpts){
		Ext.getCmp('lblYourChoose').setValue(record.get('name'));
	}
});
