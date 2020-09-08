Ext.define('mvc.view.Demo2', {
    extend: 'Ext.Panel',
    alias: 'widget.demo2',
	title: 'Demo2',
	width:300,
	height:100,
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
