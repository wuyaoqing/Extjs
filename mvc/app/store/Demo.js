Ext.define('mvc.store.Demo', {
    extend: 'Ext.data.Store',
    requires: 'mvc.model.Demo',
    model: 'mvc.model.Demo',
	proxy: {
	    type: 'ajax',
	    url: 'data/demo.json',
	    reader: {
	        type: 'json',
	        rootProperty: 'results'
	    }
	}
});