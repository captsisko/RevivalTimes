Ext.define('RevivalTimes.store.Articles.Articles', {
	extend: 'Ext.data.Store',

	config: {
		model: 'RevivalTimes.model.Articles.Article',
		storeId: 'Articles',
		autoLoad: true,

		proxy: {
			type: 'ajax',
			url: 'http://178.79.128.76/revivaltimes/app/sections/contentlist/12',

			reader: {
				type: 'json',
				rootProperty: 'JSON',
			}
		}
	}//config
});