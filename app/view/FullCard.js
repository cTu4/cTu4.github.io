Ext.define('TaskBoard.view.FullCard',{
    extend: 'Ext.panel.Panel',
    xtype: 'full_card',
    reference: 'full_card',
    viewModel:{
        type: 'TaskModel'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: '10px',
    items:[
                {
                    bind:{
                        html:"Наименование задачи: '{task}'"
                    }
                },
                {
                    bind:{
                        html:"<p>Испольнитель: {surname} {name}</p>"
                    }
                },
                {
                    bind:{
                        html:"<p>Статус: {status}</p>"
                    }
                },
                {
                    bind:{
                        html:"<p>Важность: {important}</p>"
                    }
                },
                {
                    bind:{
                        html:"<p>Дата: {date}</p>"
                    }
                }
    ],
    bind:{
        title: 'Задача {number}'
    }
});