Ext.define('RevivalTimes.view.Articles.ArticlesList', {
	extend: 'Ext.List',
	xtype: 'articleslistview',

	config: {
		iconCls: 'arrow_left',
		title: 'Articles',

		store: 'Articles',
		itemTpl: '{title} - {nid}',

		onItemDisclosure: true,

	}//config
});