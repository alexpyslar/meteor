import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    updateBook: function (doc) {
        Books.update(doc);
    }
});
