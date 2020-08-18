/**
 A reusable users grid
 */
Ext.define('TaskBoard.view.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersgrid',
    reference: 'usersgrid',
    viewModel: {
        type:'TestViewModel'
    },
    tbar: [{
        text: 'Add',
        itemId: 'addButton',
        bind: {
            disabled: '{readOnly}'
        }
    }, {
        text: 'Remove',
        itemId: 'removeButton',
        bind: {
            disabled: '{readOnly}',
            text: 'Remove {usersgrid.selection.name}'
        },
    }],

    columns: [{
        dataIndex: 'id',
        header: 'id'
    }, {
        dataIndex: 'name',
        header: 'name'
    }]
});