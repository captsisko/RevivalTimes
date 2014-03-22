Ext.define('RevivalTimes.view.Viewport', {
	extend: 'Ext.Container',
	xtype: 'viewport',

	/*requires: [
		'Ext.TitleBar'
	],*/

	config: {
		fullscreen: true,
		layout: 'hbox',
		items: [
			{
				xtype: 'main',
				cls: 'slide',
				width: '100%',
				html: 'Testing ...',
				// flex: 2,
			},
			{
				xtype: 'navigation',
				width: 250,
				// flex: 0.5,
			}
		]
	}
});