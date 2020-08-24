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
      handler(){
          let items = Ext.ComponentQuery.query('panel[class=drag]');
          console.log(Ext.getCmp('board').el.dom);
            items.forEach(function (item){
                new Ext.drag.Source({
                    element: item.el.dom,
                    proxy: {
                        type: 'placeholder',
                        cls: 'proxy-drag-custom',
                        html: 'Custom'
                    }
                });
            })
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
            id:'plan',
            title: 'Plan',
            titleAlign: 'center',
            flex:1,
            margin: '0 1px'
        },{
                xtype:'panel',
                name: 'progress',
                id:'progress',
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
                    case 0:
                       color='#f43343';
                       break;
                    case 1:
                        color='#f4f400';
                        break;
                    case 2:
                        color='#7dd922';
                        break;
                }
               items.down('[name='+key+']').add({
                    xtype:'panel',
                   id: item.data.number,
                   id_card: item.data.id,
                   class:'drag',
                   title:{
                       cls:'header-title-cls',
                       text:item.data.number
                   },
                   color:color,
                   selected:false,
                   margin: 10,
                    titleAlign: 'center',
                    style:{
                      color:'black'
                    },
                    header:{
                        style:{
                            background: color
                        }
                    },
                   listeners:{

                        // afterRender(el){
                        //     console.log(el);
                        //     var dd = Ext.create('Ext.dd.DD', el, 'tablesDDGroup', {
                        //         isTarget: false
                        //     });
                        //     var mainTarget = Ext.create('Ext.dd.DDTarget', 'main', 'tablesDDGroup', {
                        //         ignoreSelf: false
                        //     });
                        //     Ext.apply(dd, overrides);
                        //     Ext.apply(mainTarget, overrides);
                        // },
                        click:{
                            element:'body',
                            fn(e,el){
                                let sel_card = Ext.getCmp('items').down('[selected=true]');
                                if (sel_card!=null){
                                    sel_card.setStyle('opacity',1);
                                    sel_card.selected=false;
                                }
                                let id_card = this.component.id_card;
                                let card = Ext.getCmp('items').down('[id_card='+id_card+']');
                                card.selected=true;
                                card.setStyle('opacity',0.7);
                                let data = Ext.data.StoreManager.lookup('store_users').getById(id_card).data;
                                data['color']=this.component.color;
                                Ext.getCmp('full_card').getViewModel().setData(data);

                            }
                        }
                   },
                    layout:'fit',

                    items:{
                        xtype:'displayfield',
                        style: {
                            textAlign:'center',
                            background: color,
                            cursor:'pointer'

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
    }
});
var overrides = {
    startDrag: function(e) {
        console.log('startDrag');
    },
    onDrag: function() {
        console.log('onDrag');
    },
    onDragEnter: function(e, id) {
        console.log('onDragEnter');
    },
    onDragOver: function(e, id) {
        console.log('onDragOver');
    },
    onDragOut: function(e, id) {
        console.log('onDragOut');
    },
    onDragDrop: function(e, id) {
        console.log('onDragDrop');
    },
    onInvalidDrop: function() {
        console.log('onInvalidDrop');
    },
    endDrag: function(e, id) {
        console.log('endDrag');
    }
};