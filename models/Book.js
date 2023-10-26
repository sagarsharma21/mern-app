// In order to interact with DB, we need to create a model for each of our resources.
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published_date: {
        type: Date
    },
    publisher: {
        type: String
    }
});

module.exports = Book = mongoose.model('book', BookSchema);