Ext.define('app.view.DemoView', {			//定义新类
    extend: 'Ext.container.Viewport',		//继承viewport
	alias:'view.demoview',					//设置别名
    requires: [								//引用页面依赖文件
        'app.view.DemoViewController',
        'app.view.DemoViewModel',
		'app.view.UserModel',
		'app.view.UserStore'
    ],
    controller: 'DemoViewController',		//控制器的别名
    viewModel: { type: 'DemoViewModel' }, 	//viewmodel的别名
    layout: 'border',//布局
	constructor:function(){
		console.log('1：构造函数启动');
		//动态增加数据
		this.callParent(arguments);
		
	},
	initComponent:function(){
		console.log('2：初始化部件');
		// var PeriodStoreData = new Ext.data.ArrayStore({
		// 				 data:[],
		// 				 fields:[
		// 					 {name:'value',type:'string'},
		// 					 {name:'text',type:'string'}
		// 				 ]
		// });
		//  PeriodStoreData.add([{ value:'1' ,text:'1'},{ value:'1',text:'2'}]);
		    
var PeriodStoreData = [];
var PeriodStore = Ext.create('Ext.data.Store', {
	fields: ['value','text'],
	data: PeriodStoreData
})
	PeriodStoreData.push({"value":"1","text":"11"})				
		//加载数据
		var userstore = Ext.create('app.view.UserStore');
		//指定页面部件
		this.items= [
			{
				region:'north',
				xtype:'container',
				margin:'5 0 5 0',
				layout:'vbox',
				items:[
					{
						xtype:'container',
						layout:'hbox',
						items:[
							{
								xtype: 'textfield',
								name: 'startDate',
								fieldLabel: 'Start date'
							},{
								xtype: 'datefield',
								name: 'startDate',
								fieldLabel: 'Start date'
							},{
								xtype: 'datefield',
								name: 'endDate',
								fieldLabel: 'End date'
							}
						]
					},
					{
						xtype:'container',
						layout:'hbox',
						items:[
							{
								xtype: 'textfield',
								name: 'startDate',
								fieldLabel: 'Start date'
							},{
								xtype: 'datefield',
								name: 'startDate',
								fieldLabel: 'Start date'
							},{
								xtype: 'datefield',
								name: 'endDate',
								fieldLabel: 'End date'
							}
						]
					}
				]
				//title:'aa'
			},
			{ 
				region:'center',
				xtype: 'grid',
				id:'usergrid',
				// bind: { //绑定数据
				// 	title: '{name}'
				// },
				listeners:{
					itemdblclick:'itemdblclick'
				},
				tbar: [
					{xtype:'button', text: '增加下拉框数据',handler: 'onAddComboData'},
					{xtype:'button', text: '弹出LoadMask',handler: 'onLoadMask'},
					{xtype:'button', text: '修改标题',handler: 'onClickButton'},
					{xtype:'button', text: '获取viewmodel数据',handler: 'onGetViewData'},
					{xtype:'combo',id:'MyCombo',valueField:'value',labelWidth:75,width:175,displayField:'text',queryMode:'local',
					listeners:{
						select:'onYourChoose'
					},
					// bind:{  //绑定数据
					// 	fieldLabel:'{comboTitle}',
					// 	store:'{user}'
					// },
					store:PeriodStore
					},
					{xtype:'displayfield',value:'', fieldLabel: '你选择的是:',id:'lblYourChoose'}
				],
				bbar:[
					{xtype:'pagingtoolbar',displayInfo:true,store:userstore}
				],
				store:userstore,
				columns:[
					{xtype: 'rownumberer',text:'序号',width:50,align:'center'},
					{text:'id',dataIndex:'id'},
					{text:'用户名',dataIndex:'username',
					editor: {
						xtype: 'combo',
						mode: 'local',
						valueField: 'value',
						displayField: 'text',
						forceSelection: true,
						allowBlank: false,
						store: PeriodStore
					},
					// renderer: function(value) {//渲染的时候显示
					// 	return comboData[value][1];
					// 	}
					},
					{text:'真是姓名',dataIndex:'realname'},
					{text:'雇佣日期',dataIndex:'hiredate',format:'Y-m-d'},
					{text:'电话',dataIndex:'phone'},
					{text:'状态',dataIndex:'state',renderer:function(value){
						return value?'在职':'<span style="color:red;">离职</span>'
					}}
				],
				 plugins: [
						{
							ptype: 'cellediting',
							clicksToEdit: 1
						}
					]
       }];
	   //调用父类方法
		this.callParent(arguments);
	}
    
});
