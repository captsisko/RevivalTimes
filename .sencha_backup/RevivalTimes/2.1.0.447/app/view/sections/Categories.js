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
			}
		],
	}
});