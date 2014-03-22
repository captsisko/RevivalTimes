Ext.define('RevivalTimes.view.sections.CategoriesContainer', {
	extend: 'Ext.navigation.View',
	xtype: 'categoriescontainer',

	config: {
		title: 'Categories',
		iconCls: 'arrow_up',
		items: [
			{
				xtype: 'categoriesview',
				title: 'Categories [Nav-View]'
			}
		]
	}

})