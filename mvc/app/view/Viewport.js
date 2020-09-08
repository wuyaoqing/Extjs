Ext.define('mvc.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'vbox',

    requires: [
        'mvc.view.Demo',
		'mvc.view.Demo2'
    ],

    initComponent: function() {
        this.items = [
			{xtype: 'demo'},
			{xtype: 'demo2'},
			];

        this.callParent();
    }
});
