Ext.define('TaskBoard.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    fields: ['id', 'name'],

    data: [{
        id: 1,
        name: 'John'
    }, {
        id: 2,
        name: 'Jane'
    }]
});