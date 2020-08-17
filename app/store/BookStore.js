Ext.define('TaskBoard.store.BookStore', {
    extend: 'Ext.data.Store',
    model: 'TaskBoard.model.Book',
    autoLoad: true,
    storeId: 'BookStore',
    proxy: {
        type: 'ajax',
        url: 'app/data/books.json',
        reader: {
            type: 'json',
            root: 'books',
            successProperty: 'success'
        }
    }
});