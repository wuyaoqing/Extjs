 Ext.create('Ext.data.Store', {
     model: 'User',//使用User类作为模型
     pageSize:10,//每页显示的数量
     proxy: {
         type: 'ajax',
         url: '../json/user_list.json',
         reader: {
             type: 'json',//返回类型
             root: 'result',//从返回的结果中指定result属性作为数据集合
 			totalProperty:'total' //页大小
         }
     }
 });