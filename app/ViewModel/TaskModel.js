Ext.define('TaskBoard.ViewModel.TaskModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TaskModel',
    data:{
        id: 1,
        number: 'TSK-1200',
        task: 'Create car',
        name: 'John',
        surname: 'Brawn',
        status: 'PLAN',
        important: 'Must',
        date: '22.11.2020'
    }
});