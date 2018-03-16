import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Authors = new Mongo.Collection('authors');

Schemas.Author = new SimpleSchema({
    name: {
        type: String,
        label: "Author name",
        autoform: {
            placeholder: "name"
        }
    },
    year: {
        type: String,
        label: 'Year birth',
        regEx: /(^$|^\d{4})$/,
        autoform: {
            placeholder: "year"
        }
    }
});

Authors.attachSchema(Schemas.Author);