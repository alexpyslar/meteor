import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Books = new Mongo.Collection('books');

AuthorWithId = new SimpleSchema(Schemas.Author).extend(new SimpleSchema({_id: {type: String, optional: true}}));

Schemas.Book = new SimpleSchema({
    name: {
        type: String,
        label: "Book name",
        autoform: {
            placeholder: "name"
        }
    },
    genre: {
        type: String,
        label: "Book genre",
        autoform: {
            placeholder: "genre"
        }
    },
    pageCount: {
        type: Number,
        label: "Page count",
        autoform: {
            placeholder: "page count"
        }
    },
    authors: {
        type: Array
    },
    'authors.$': {
        type: AuthorWithId
    }
});

Books.attachSchema(Schemas.Book);