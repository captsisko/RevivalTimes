Ext.define('RevivalTimes.controller.sections.Category', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			categories: 'categoriesview',
			categoriescontainer: 'categoriescontainer',
		},
		control: {
			'categoriesview': {
				disclose: 'list_articles',
			}
		}
	},//config

	list_articles: function(list, record){
		console.log('List-Articles function responding: ' + record.data.tid);
//		Ext.Viewport.setActiveItem({xtype} : 'articleslistview');
		/*this.getCategories().push({
			xtype: 'articleslistview',
			title: record.data.term,
			data: record.data,
		})*/
	}

});