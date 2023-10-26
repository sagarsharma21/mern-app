// This file holds all our APIs. We will create some APIs to show how it works.

const express = require('express');
const router = express.Router();

//Load Book model
const Book = require('../../models/Books');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => {
    res.send('Book route testing!')
});

// @route GET api/books
// @description Get all books
// @access Public

router.get('/', (req, res) => {
    Books.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No books found'}))
});

// @route GET api/books/:id
// @description Get a single book by id
// @access Public

router.get('/:id', (req,res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.send(404).json({ nobooksfound: 'No books found'}))
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Book.create(req.body)
      .then(book => res.json({ msg: 'Book added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
  });

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, eq.body)
    .then(book => res.json({msg: 'Updated successfully'}))
    .catch(err => 
        res.status(400).json({error: 'Unable to update the Database'})
        );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({msg: 'Book entry deleted successfully'}));
});

module.exports = router;
