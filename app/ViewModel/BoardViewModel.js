Ext.define('TaskBoard.ViewModel.BoardViewModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.BoardViewModel',
    stores:{
      Users:{
          type:'users'
      }
    },
    formulas:{
      board_data(get){
          let store = get('Users').getData().items;
          let plan=[];
          let  progress = [];
          let  test=[];
          let done = [];
          store.forEach(function (item){
              switch (item.data.status){
                  case 'Plan':
                      plan.push(item);
                      break;
                  case 'In progress':
                      progress.push(item);
                      break;
                  case 'Testing':
                      test.push(item);
                      break;
                  case 'Done':
                      done.push(item);
                      break;
              }
          });
          let data = [];
          data.push([plan,progress,test,done]);
          var items = Ext.create({
              xtype: 'card'
          });
          return data;
      }
    },
    data:{
        title:'Users'
    }
});