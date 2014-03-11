Ext.define('RevivalTimes.view.Main', {
    extend: 'Ext.tab.Panel',
    // extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        //'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Deeper',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Revival Times: London and the world for Christ',
                    items: [
                        {
                            xtype: 'button',
                            // align: 'right',
                            // text: 'Menu',
                            action: 'navigation_btn',
                            iconCls: 'list',
                            iconMask: true,
                        }
                    ]
                },

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
                xtype: 'categoriesview'
            },
            {
                xtype: 'articleslistview'
            },
            {
                xtype: 'categoriescontainer'
            }/*,
            {
                xtype: 'interface'
            }*/
        ]
    }
});