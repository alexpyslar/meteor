import SimpleSchema from 'simpl-schema';

SimpleSchema.debug = true;
SimpleSchema.extendOptions(['autoform']);

Schemas = {};

Handlebars.registerHelper('log', function (val) {
    console.log(val);
});