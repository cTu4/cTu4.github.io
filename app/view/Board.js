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

    bbar:{
        xtype:'button',
        text: 'test',
        handler(){
            let board = Ext.getCmp('board');
            board.remove('items');
            board.remove(board.items.items);
            console.log(Ext.data.StoreManager.lookup('store_users').getData().items);
            Ext.data.StoreManager.lookup('store_users').add({
                id: 5,
                number: 'TSK-1205',
                task: 'Create TaskBoard',
                name: 'FFF',
                surname: 'Medvedev',
                status: 'Testing',
                important: 'Could',
                date: '22.09.2020'
            });
            console.log(Ext.data.StoreManager.lookup('store_users'));
            board.getViewModel().getRoot().descend(['board_data']).formula.react();
        }
    },
    setItems(data){
        let keys = Object.keys(data);
        let items = Ext.create({
            xtype:'panel',
            id:'items',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            },
        });
        items.add({
            xtype:'panel',
            name: 'plan',
            title: 'Plan',
            titleAlign: 'center',
            flex:1,
            margin: '0 1px'
        },{
                xtype:'panel',
                name: 'progress',
                title: 'In Progress',
                titleAlign: 'center',
                flex:1,
                margin: '0 1px'
            },
            {
                xtype:'panel',
                name: 'test',
                title: 'Testing',
                titleAlign: 'center',
                flex:1,
                margin: '0 1px'
            },
            {
                xtype:'panel',
                name: 'done',
                title: 'Done',
                titleAlign: 'center',
                flex:1,
                margin: '0 1px'

            });
        keys.forEach(function (key){
            data[key].forEach(function (item){
                let color ='';
                switch (item.data.important){
                    case 'Must':
                       color='#f43343';
                       break;
                    case 'Should':
                        color='#f4f400';
                        break;
                    case 'Could':
                        color='#7dd922';
                        break;
                }
               items.down('[name='+key+']').add({
                    xtype:'panel',
                    title: item.data.number,
                    id_card: item.data.id,
                    margin: 10,
                    titleAlign: 'center',
                    style:{
                      color:'black'
                    },
                   listeners:{
                       click: {
                           element: 'el', //bind to the underlying el property on the panel
                           fn: function(e,el){

                           }
                       },
                   },
                    header:{
                      style:{
                          background: color
                      }
                    },
                    layout:'fit',
                    items:{
                        xtype:'displayfield',
                        style: {
                            textAlign:'center',
                            background: color

                        },

                        value:item.data.task

                    }
                });
            })
        });
        Ext.getCmp('board').add(items);
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