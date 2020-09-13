 Ext.define('app.view.UserStore',{
	 extend:'Ext.data.Store',//继承
	 model: 'app.view.UserModel',//使用User类作为模型
	 pageSize:10,//每页显示的数量
	 proxy: {
	     type: 'ajax',
	     url: '../json/user_list.json',
	     reader: {
	         type: 'json',//返回类型
	         rootProperty: 'result',//从返回的结果中指定result属性作为数据集合
	  		 totalProperty:'total' //页大小
	     }
	 },
	 autoLoad:true  //启用自动加载，创建该类实例会自动加载数据
 })