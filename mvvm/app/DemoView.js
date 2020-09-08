Ext.define('app.view.DemoView', {
    extend: 'Ext.container.Container',
    requires: [
        'app.view.DemoViewController',
        'app.view.DemoViewModel'
    ],

    xtype: 'app-demo',
    style: {background:'#ffffff'},
    controller: 'demo',
    viewModel: { type: 'demo' },
    layout: { type: 'border'},
    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        width: 250,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    }]
});
