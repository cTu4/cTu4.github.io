Ext.define('TaskBoard.view.Book', {
    extend: 'Ext.window.Window',
    alias: 'widget.bookwindow',

    title: 'Книга',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype: 'textfield',
                name : 'name',
                fieldLabel: 'Название'
            },{
                xtype: 'textfield',
                name : 'author',
                fieldLabel: 'Автор'
            },{
                xtype: 'numberfield',
                name : 'year',
                fieldLabel: 'Год',
                minValue: 1,
            }]
        }];
        this.dockedItems=[{
            xtype:'toolbar',
            docked: 'top',
            items: [{
                text:'Создать',
                action: 'new'
            },{
                text:'Сохранить',
                action: 'save'
            },{
                text:'Удалить',
                action: 'delete'
            }]
        }];
        this.buttons = [{
            text: 'Очистить',
            scope: this,
            action: 'clear'
        }];

        this.callParent(arguments);
    }
});