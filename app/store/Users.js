Ext.define('TaskBoard.store.Users', {
    extend: 'Ext.data.Store',
    storeId:'store_users',
    alias: 'store.users',
    fields: ['id','number','task','name','surname','status','important','date'],
    data: [
        {
        id: 1,
        number: 'TSK-1200',
        task: 'Create car',
        name: 'John',
        surname: 'Brawn',
        status: 'Plan',
        important: 'Must',
        date: '22.11.2020'
        },
        {
        id: 2,
        number: 'TSK-1201',
        task: 'Create tree',
        name: 'Ann',
        surname: 'Creaty',
        status: 'In progress',
        important: 'Should',
        date: '07.09.2020'
        },
        {
            id: 3,
            number: 'TSK-1203',
            task: 'Create TaskBoard',
            name: 'Alex',
            surname: 'Medvedev',
            status: 'Testing',
            important: 'Could',
            date: '22.09.2020'
        },
        {
            id: 4,
            number: 'TSK-1204',
            task: 'Create controller',
            name: 'Jane',
            surname: 'Kook',
            status: 'Done',
            important: 'Must',
            date: '02.10.2020'
        },]
});