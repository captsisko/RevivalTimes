Ext.define('RevivalTimes.view.Articles.ArticlesList', {
	extend: 'Ext.List',
	xtype: 'articleslistview',

	config: {
		iconCls: 'arrow_left',
		title: 'Articles',

		items: {
			xtype: 'toolbar',
			title: 'Articles',
			docked: 'top',
			items :[
                {
                    align : 'left',
                    name : 'nav_btn',
                    iconCls : 'list',
                    iconMask: true,
                    ui : 'plain',
                },
                {
                    align : 'right',
                    name : 'user_btn',
                    iconCls : 'user',
                    iconMask: true,
                    ui : 'plain',
                }
            ]
		},

		store: 'Articles',
		itemTpl: '{title} - {nid}',

		onItemDisclosure: true,

	}//config
});