Ext.define('RevivalTimes.controller.Navigation', {
	extend: 'Ext.app.Controller',

	config: {

		refs: {
			main: 'main',
			navigation : 'navigation',
		},
	
		control: {
			"button[name='nav_btn']": {
				tap: 'toggleNav'
			},
			navigation : {
				itemtap : function(list, index, target, record){
					this.toggleNav();

					// console.debug('LIST: ' + list);
					// console.log('INDEX: ' + index);
					// console.error('TARGET: ' + target.toSource());
					// console.warn('RECORD: ' + record);

					// JSON.stringify(target);

					switch(index){
						case 0: 
							this.getMain().setActiveItem(0);
							break;
						case 1: 
							this.getMain().setActiveItem({xtype:'messagesview'});
							break;
						case 2:
							this.getMain().setActiveItem({xtype:'articleslistview'});
							break;
						case 3:
							this.getMain().setActiveItem({xtype:'categoriesview'});
							break;
						case 4:
							// this.getMain().setActiveItem({xtype:'chart'});
							this.getMain().setActiveItem({xtype:'chartcontainer'});
							break;
						default:
							break;
					}
				}
			}
		}

	},

	toggleNav: function(){
		// console.log('responding!');
		var me = this;
		mainEl = me.getMain().element;
		
		if (mainEl.hasCls('out')) {
			mainEl.removeCls('out').addCls('in'); 
			me.getMain().setMasked(false);
		} else {
			mainEl.removeCls('in').addCls('out');  
			me.getMain().setMasked(true);
		}
	}

});