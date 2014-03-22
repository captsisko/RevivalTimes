Ext.define('Ext.ToolbarCustomized', {
    extend: 'Ext.Toolbar',
    xtype : 'toolbarcustomized',

    config: {
        items :[{
            align : 'left',
            name : 'nav_btn',
            iconCls : 'list',
            iconMask: true,
            ui : 'plain'
        }]
    }
});

