Ext.define('RevivalTimes.model.Message', {
	extend: 'Ext.data.Model',

	config: {

		fields: [
			'nid',
			'title', //KT Sunday Service: Made in His Image
			'description', //Made in His Image
			'Date', //Sun, 19 Jan 2014 14:30:00 +0000
			'Time',
			'guid', //http://www.kt.org/rss/mp3/kt_2502_201401231506.mp3</guid>
			// 'itunes:subtitle', //Week number 03 - KT Sunday Service featuring Bruce Atkinson
			// 'itunes:summary', //Made in His Image
			'Author', //Bruce Atkinson
			// 'itunes:duration', //00:51:38
		],
	},
	
});