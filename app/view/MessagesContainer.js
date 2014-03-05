Ext.define('RevivalTimes.view.MessagesContainer', {
	extend: 'Ext.navigation.View',
	// extend: 'Ext.tab.Panel',
	xtype: 'messagescontainer',

	requires: [
		// 'RevivalTimes.view.Messages',
		'RevivalTimes.view.MessageDisplay'
	],

	config: {
		title: 'Messages',
        iconCls: 'user',
		items: 
		[
			{
				xtype: 'messagesview',
			},
		],
	},
});