Ext.define('RevivalTimes.view.sections.CategoriesContainer', {
	extend: 'Ext.navigation.View',
	xtype: 'categoriescontainer',

	config: {
		title: 'Categories',
		iconCls: 'arrow_up',

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
			},
			{
				xtype: 'categoriesview',
			}
		],

		/*items: [
			{
					xtype: 'button',
					title: 'text',
					iconCls: 'user',
					iconMask: true,

				// items: {
					xtype: 'categoriesview',
				// }
			}
		]*/

	} //config
});