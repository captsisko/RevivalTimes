Ext.define('RevivalTimes.store.Messages', {
	extend: 'Ext.data.Store',
	// requires: 'Ext.data.reader.Xml',

	config: {
		model: 'RevivalTimes.model.Message',
		storeId: 'Messages',
		autoLoad: true,
		sorters: [
			{
				property: 'Date',
				direction: 'DESC',
			}
		],
	    grouper: {
	    	groupFn: function(record){
	    		return record.get('Date');
	    	}
	    },

	    proxy: {
	    	// limitParam: 'pageSize',
			type: 'ajax',
			// url: 'http://www.kt.org/rss/rss.xml',
			// url: 'http://178.79.128.76/revivaltimes/CORSFIX/messages.php',
			// url: 'http://178.79.128.76/revivaltimes/CORSFIX/xmlsample.php',
			// url: 'http://178.79.128.76/revivaltimes/app/sections',
			url: 'http://178.79.128.76/revivaltimes/app/messages/',

			reader: {
				// type: 'xml',
				// rootProperty: 'channel',
				// rootProperty: 'item',
				
				type: 'json',
				rootProperty: 'JSON',
			}
		},

	}//config	
});