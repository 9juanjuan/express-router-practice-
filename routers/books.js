const express = require('express');
const Router = express.Router;

const {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
} = require ('../controllers/books');
// Creat the router 
const bookRoutes = Router (); 
bookRoutes.get('/', retrieveAll);
bookRoutes.get('/:id', retrieveOne);
bookRoutes.post('/', create);
bookRoutes.put('/', update);
bookRoutes.delete('/', deleteOne);

module.exports = bookRoutes;