Ext.define('RevivalTimes.view.sections.Categories', {
	extend: 'Ext.List',
	// extend: 'Ext.navigation.View',
	xtype: 'categoriesview',

	config: {
		title: 'Sections [List]',
		iconCls: 'settings',

		store: 'Categories',
		itemTpl: '{term}',

		onItemDisclosure: true,

		items: [
			{
				xtype: 'toolbar',
				title: 'Sections',
				docked: 'top',
			}
		],
	}
});