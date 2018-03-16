if (Authors.find().count() === 0) {
    Authors.insert({
        "name": "John Doe",
        "year": "1979"
    });
    Authors.insert({
        "name": "Jane Moore",
        "year": "1983"
    });
    Authors.insert({
        "name": "Jose Mendosa",
        "year": "1969"
    });
}
authorsArray = Authors.find().fetch();
if (Books.find().count() === 0) {
    Books.insert({
        "name": "Math",
        "genre": "science",
        "pageCount": 254,
        "authors": authorsArray
    });
}