Ext.define('TaskBoard.view.Card',{
    extend: 'Ext.panel.Panel',
    xtype: 'card',
    reference: 'card',
    height: 100,
    viewModel:{
        type: 'TaskModel'
    },
    bind:{
        title: 'Задача {number}',
        html: '{task}'
    }
});