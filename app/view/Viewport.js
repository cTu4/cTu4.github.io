/**
 Main viewport
 */
Ext.define('TaskBoard.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'TaskBoard.view.UsersGrid',
        'TaskBoard.store.Users'
    ],

    defaultListenerScope: true,

    items: [{
        title: 'Outer Container',
        xtype: 'panel',
        bodyPadding: 10,
        defaults: {
            margin: '10 0'
        },
        items: [{
            xtype: 'button',
            text: 'Set Read only',
            enableToggle: true,
            handler: 'readOnlyButton_click'
        }, {
            xtype: 'usersgrid',
            title: 'Users',
            border: true,
            store: {
                type: 'users'
            }
        }]
    }],

    readOnlyButton_click: function (self) {
        this.down('usersgrid').setReadOnly(self.pressed);
    }
});