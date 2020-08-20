Ext.define('TaskBoard.view.Board',{
    extend: 'Ext.panel.Panel',
    xtype: 'board',
    id: 'board',
    reference: 'board',
    title:'Task Board',
    titleAlign: 'center',
    viewModel:{
        type: 'BoardViewModel'
    },
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    setItems(data){
        let keys = Object.keys(data);
        keys.forEach(function (key){
            Ext.getCmp('board').add({
                xtype:'panel',
                id: key,
                title: key,
                titleAlign: 'center',
                flex:1
            });
            data[key].forEach(function (item){
                Ext.getCmp(key).add({
                    xtype:'panel',
                    title: item.data.number,
                    titleAlign: 'center',
                    layout:'fit',
                    items:{
                        xtype:'displayfield',
                        style: "text-align:center",
                        value:item.data.task
                    }
                });
            })
        });
    },
    bind:{
        items:'{board_data}'
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