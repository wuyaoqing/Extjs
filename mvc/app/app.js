Ext.application({
    name: 'mvc',
    //值为true，在触发launch函数之前自动加载并实例化AppName.view。Viewport对象
    autoCreateViewport: true,

    models: ['Demo'],
    stores: ['Demo'],
    controllers: ['Demo'],
	launch:function(){
		console.log('launch运行')
	}
});
