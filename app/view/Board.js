Ext.define('TaskBoard.view.Board',{
    extend: 'Ext.panel.Panel',
    xtype: 'board',
    id: 'board',
    reference: 'board',
    title:'Task Board',
    viewModel:{
        type: 'BoardViewModel'
    },

    constructor: function (config) {
        return this.callParent(arguments);
    },
    initComponent: function () {
        Ext.applyIf(this, {

        });

        this.callParent(arguments);
    }
});