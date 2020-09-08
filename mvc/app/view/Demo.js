Ext.define('mvc.view.Demo', {
    extend: 'Ext.Panel',
    alias: 'widget.demo',
    store: 'Demo',
    queryMode: 'local',
	title: 'Demo',
	width:200,
	height:150,
	buttons: [{
		text: 'update',
		action: 'updatePanelBody'
	},{
		text:'test',
		action:'testMsg'
	}],

    updateBody: function(html) {
        this.body.setHTML(html);
    }
});
