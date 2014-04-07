Ext.define('RevivalTimes.view.Chart', {
	extend: 'Ext.chart.PolarChart',
	xtype: 'chart',

	requires: [
		'Ext.chart.series.Pie',
		'Ext.chart.interactions.Rotate'
	],

	config: {
		title: 'Statistics',
		iconCls: 'settings',

		layout: 'fit',
		animate: true,
	    interactions: ['rotate'],
	    colors: ['#115fa6', '#94ae0a', '#a61120', '#ff8809', '#ffd13e'],
	    store: {
	      fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
	      data: [
	          {name: 'metric one',   data1: 10, data2: 12, data3: 14, data4: 8,  data5: 13, data6: 20},
	          {name: 'metric two',   data1: 7,  data2: 8,  data3: 16, data4: 10, data5: 3, 	data6: 20},
	          {name: 'metric three', data1: 5,  data2: 2,  data3: 14, data4: 12, data5: 7, 	data6: 20},
	          {name: 'metric four',  data1: 2,  data2: 14, data3: 6,  data4: 1,  data5: 23, data6: 20},
	          {name: 'metric five',  data1: 27, data2: 38, data3: 36, data4: 13, data5: 33, data6: 20}
	      ]
	    },
	    series: [{
	        type: 'pie',
	        /*label: {
	            field: 'name',
	            display: 'rotate'
	        },*/
	        xField: 'data6',
	        donut: 30,

	        labelField: 'name',
	        showInLegend: true,
	    }],

	} //config
});