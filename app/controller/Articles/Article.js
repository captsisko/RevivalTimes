Ext.define('RevivalTimes.controller.Articles.Article', {
	extend: 'Ext.app.Controller',

	config: {
		control: {
			'articleslistview': {
				disclose: 'print_article'
			}
		}
	},

	print_article: function(list, record){
		console.log('Print-Article for NID#' + record.data.nid);
	}
});