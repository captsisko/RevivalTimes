Ext.define('RevivalTimes.view.Main', {
    extend: 'Ext.tab.Panel',
    // extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Deeper',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'toolbar',
                    title: 'Revival Times',
                    items :[
                        {
                            align : 'left',
                            name : 'nav_btn',
                            iconCls : 'list',
                            iconMask: true,
                            ui : 'plain',
                        },
                        {
                            align : 'right',
                            name : 'user_btn',
                            iconCls : 'user',
                            iconMask: true,
                            ui : 'plain',
                        }
                    ]
                }],

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                xtype: 'messagesview'
            },
            {
                xtype: 'messagescontainer'
            },
            {
                xtype: 'articleslistview'
            },
            {
                xtype: 'categoriescontainer'
            }/*,
            {
                xtype: 'chart',
            }*/,
            {
                xtype: 'chartcontainer',
            }
        ]

    } //config
});
