/*名称一定要与路径相对应*/
Ext.define('myux.MyWindow',{        
    extend : 'Ext.window.Window',
    title : '动态加载的组件',
    width : 400,
    height : 300,
    bodyStyle: 'background:#ffc; padding:10px;',
    html : 'hello,world'
});