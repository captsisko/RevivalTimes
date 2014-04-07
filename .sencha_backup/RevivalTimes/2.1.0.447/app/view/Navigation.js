Ext.define('RevivalTimes.view.Navigation', {
	extend: 'Ext.List',
	xtype: 'navigation',
	requires : ['Ext.data.Store'],
	config: {
		cls : 'nav-list',
		itemTpl : '{title}',
		data : [
			{
				title : 'Deeper'
			},{
				title : 'Messages'
			},{
				title : 'Articles'
			},{
				title : 'Sections'
			},{
				title : 'Statistics'
			}
		]
	}
});