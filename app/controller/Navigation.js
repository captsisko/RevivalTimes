Ext.define('RevivalTimes.controller.Navigation', {
	extend: 'Ext.app.Controller',

	config: {
	
		control: {
			"button[name='nav_btn']": {
				tap: 'toggleNav'
			}
		}

	},

	toggleNav: function(){
		console.log('responding!');
	}
});