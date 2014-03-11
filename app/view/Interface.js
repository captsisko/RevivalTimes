Ext.define('RevivalTimes.view.Interface', {
	extend: 'Ext.Panel',
	xtype: 'interface',

	config: {
		
		// fullscreen: true,

		/*items: [
			{
				// xtype: 'panel',
				// html: 'navigation',
				xtype: 'slidenavigation',
				flex: 0,
				style: 'background-color: #999',
			},
			{
				// xtype: 'panel',
				// html: 'content',
				xtype: 'main',
				flex: 2,
				style: 'background: red',
			}
		]*/

							iconCls: 'list',
							title: 'interface',
							layout: 'hbox',
							

					items: [
						// {
						    {
								xtype: 'slidenavigation',
								flex: 0,
								style: 'background-color: #999',
							},
							{
								xtype: 'main',
								flex: 2,
								style: 'background: red',
							},	
						// },
					],

	}
});