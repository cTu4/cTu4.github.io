Ext.define('TaskBoard.view.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersgrid',

    config: {
        /**
         @cfg {Boolean} Read only mode
         */
        readOnly: null
    },

    defaultListenerScope: true,

    tbar: [{
        text: 'Add',
        itemId: 'addButton'
    }, {
        text: 'Remove',
        itemId: 'removeButton'
    }],

    columns: [{
        dataIndex: 'id',
        header: 'id'
    }, {
        dataIndex: 'name',
        header: 'name'
    }],

    listeners: {
        selectionchange: 'grid_selectionchange'
    },

    updateReadOnly: function (readOnly) {
        this.down('#addButton').setDisabled(readOnly);
        this.down('#removeButton').setDisabled(readOnly);
    },

    grid_selectionchange: function (self, selected) {
        var rec = selected[0];
        if (rec) {
            this.down('#removeButton').setText('Remove ' + rec.get('name'));
        }
    }
});