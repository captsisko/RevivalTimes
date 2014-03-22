Ext.define('RevivalTimes.store.sections.Categories', {
	extend: 'Ext.data.Store',

	config: {
		model: 'RevivalTimes.model.sections.Category',
		storeId: 'Categories',
		autoLoad: true,

		proxy: {
			type: 'ajax',
			url: 'http://178.79.128.76/revivaltimes/app/sections/',

			reader: {
				type: 'json',
				rootProperty: 'JSON',
			}
		}
	}
});