Ext.define('RevivalTimes.view.sections.Categories', {
	extend: 'Ext.List',
	// extend: 'Ext.navigation.View',
	xtype: 'categoriesview',

	config: {
		title: 'Sections',
		iconCls: 'settings',

		store: 'Categories',
		itemTpl: '{term}',

		onItemDisclosure: true,

		items: [
			{
				xtype: 'titlebar',
				title: 'Sections',
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

	}
});