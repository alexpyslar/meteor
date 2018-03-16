Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    noRoutesTemplate: 'notFound'
});

Router.route('/', {
    name: 'mainTemplate',
    template: 'mainTemplate',
    data: function () {
        return {
            books: Books.find().fetch()
        };
    }
});
Router.route('/book/:_id/edit', {
    name: 'editBookPage',
    template: 'editBookPage',
    data: function () {
        return {book: Books.findOne({_id: this.params._id})};
    }
});