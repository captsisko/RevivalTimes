Ext.define('RevivalTimes.controller.Navigation', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			main: 'main',
			// container: 'messagescontainer',
			userinterface: 'interface',
			slide: 'slidenavigation',
		},

		control: {
			'button[action=navigation_btn]': {
				tap: 'navigationToggle',
			},
			'slidenavigation': {
				itemtap: 'slide_navigation_click'
			},
		},
	},//config

	slide_navigation_click: function(list, index, target, record){
	// test_func: function( this, item, index, e, eOpts ){
		console.log('Menu tap responding ... INDEX: ' + index);
		// console.log('List: ' + list);
		// console.log('Index: ' + index);
		// console.log('Target: ' + target);
		// console.log('Record: ' + record);

		switch(index){
			case 0:
				this.getMain().setActiveItem('main');
				// this.getUserinterface().setActiveItem('main');
				break;
			case 1:
				this.getMain().setActiveItem('categoriesview');
				// this.getUserinterface().setActiveItem('categoriesview');
				break;
			case 2:
				this.getMain().setActiveItem('messagescontainer');
				// this.getUserinterface().setActiveItem('messagescontainer');
				break;
			case 3:
				this.getMain().setActiveItem('articleslistview');
				// this.getUserinterface().setActiveItem('articleslistview');
				break;
			default:
			break;
		}
		this.navigationToggle();
	},

	navigationToggle: function(){
		console.log('Navigation button clicked: ' + this.getSlide().getFlex());

		if( this.getSlide().getFlex() > 0 ){
			this.getSlide().setFlex(0);
		}
		else{
			this.getSlide().setFlex(0.5);
			this.getMain().setMasked(false);
		}

		// this.getUserinterface().animateActiveItem(this.getSlide(), {type: 'slide', direction: 'right'});
	}

});