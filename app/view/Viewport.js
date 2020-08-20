/**
 Main viewport
 */
Ext.define('TaskBoard.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'View.Viewport',
    requires: [
        'TaskBoard.view.UsersGrid',
        'TaskBoard.view.FullCard',
        'TaskBoard.view.Board',
        'TaskBoard.store.Users',
        'TaskBoard.view.Card',
        'TaskBoard.ViewModel.TestViewModel',
        'TaskBoard.ViewModel.TaskModel',
        'TaskBoard.ViewModel.BoardViewModel'


    ],

    defaultListenerScope: true,

    items: [{
        title: 'Outer Container',
        xtype: 'panel',
        bodyPadding: 10,
        defaults: {
            margin: '10 0'
        },
        items: [
        //     {
        //     xtype: 'button',
        //     text: 'Set Read only',
        //     enableToggle: true,
        //     handler: 'readOnlyButton_click'
        // }, {
        //     xtype: 'usersgrid',
        //     title: 'Users',
        //     border: true,
        //     store: {
        //         type: 'users'
        //     }
        // },
            {
                xtype:'board',
            },
            // {
            //     xtype: 'full_card'
            // }
        ]
    }],

    readOnlyButton_click: function (self) {
        this.down('usersgrid').getViewModel().set('readOnly', self.pressed);
    }
});