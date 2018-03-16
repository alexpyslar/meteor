Template.mainTemplate.helpers({
    isNotEmpty() {
        return Books.find().count() > 0;
    }
});

Template.editBookPage.events({
    'click button[type=reset]'() {
        Router.go("/");
    }
});

AutoForm.addHooks(['updateBookForm', 'productionPreferencesForm'], {
    onSuccess: function(operation, result, template){
        Router.go("/");
    },
    onError: function(operation, result, template){
        console.log(result);
    }
});