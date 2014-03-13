Ext.define('RevivalTimes.view.Messages', {
	extend: 'Ext.List',
	xtype: 'messagesview',

    requires: [
        // 'RevivalTimes.view.MessageDisplay',
        'Ext.plugin.ListPaging',
    ],
   
    config: {

        /*items: [
            {
                xtype: 'titlebar',
                title: 'Messages',
                docked: 'top',
                items: {
                    xtype: 'button',
                    title: 'text',
                    iconCls: 'list',
                    action: 'navigation_btn',
                    iconMask: true,
                }
            }
        ],*/

            hidden: true,

    		title: 'Messages',
            iconCls: 'action',
            grouped: true,

            styleHtmlContent: true,

            store: 'Messages',
            itemTpl: '<h4>{title} - ({nid})</h4>' + 
                    '<span>{Author}</span> <br>' + 
                    ' <span>{Date}</span> <br>' +
                    ' <span>{Time}</span>',
            // itemTpl: 'testing - {name}',

            onItemDisclosure: true,
            loadingText: 'Loading ...',
            emptyText: 'Error ...',
            striped: true,

            // infinite: true,

            plugins: [ //sucessfully load new content when scrolled to bottom of view
            	{
            		type: 'listpaging',
            		autoPaging: true,
            	}
            ],

            listeners: {
            	itemtap: function(data, index){
                    var message = data.getStore().getAt(index);
                    this.fireEvent('disclose', '', message);
            	},
            },
    }, //config

});