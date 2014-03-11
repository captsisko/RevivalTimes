Ext.define('RevivalTimes.view.Navigation', {
	extend: 'Ext.List',
	xtype: 'slidenavigation',

	config: {
		itemTpl: '{title}',
		data : 
		[
			{
				title : 'Deeper',
				handler: function(){
					console.log('Testing');
				}
			},
			{
				title : 'Sections'
			},
			{
				title : 'Messages'
			},
			{
				title: 'Articles'
			},
		],
	}

});