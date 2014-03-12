Ext.define('RevivalTimes.view.Articles.ArticlesList', {
	extend: 'Ext.List',
	xtype: 'articleslistview',

	config: {
		iconCls: 'arrow_left',
		title: 'Articles',

		store: 'Articles',
		itemTpl: '{title} - {nid}',

		onItemDisclosure: true,

		items: [
			{
				xtype: 'titlebar',
				title: 'Articles',
				docked: 'top',
				items: {
					xtype: 'button',
					title: 'text',
					iconCls: 'list',
                    action: 'navigation_btn',
					iconMask: true,
				}
			}
		],

	}//config
});