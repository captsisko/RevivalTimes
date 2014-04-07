Ext.define('RevivalTimes.view.ChartContainer', {
	extend: 'Ext.Container',
	xtype: 'chartcontainer',

	config: {
		title: 'Statistics',
		iconCls: 'settings',

        layout: 'fit',

		items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Statistics Chart - Container',
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
            {
    		  xtype: 'chart',
            }
        ],

        // xtype: 'chart',
		// html: 'testing'

	} //config
});
