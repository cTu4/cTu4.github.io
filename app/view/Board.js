Ext.define('TaskBoard.view.Board',{
    extend: 'Ext.panel.Panel',
    xtype: 'board',
    id: 'board',
    reference: 'board',
    title:'Task Board',
    viewModel:{
        type: 'BoardViewModel'
    },
    bind:{
        title: '{board_data}'
    }
});