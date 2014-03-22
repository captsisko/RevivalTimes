Ext.define('RevivalTimes.controller.Messages', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			// main: 'main',
			container: 'messagescontainer',
		},

		control: {
			/*'messagesView': {
				PrintNode: 'print_node',
			},*/
			'messagesview': {
				disclose: 'print_node',
			},
		},
	},//config

	print_node: function(list, record){
		this.getContainer().push({
			xtype: 'messagedisplay',
			title: record.data.title,
			data: record.data,
		})
	}

});