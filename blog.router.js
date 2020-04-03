const express = require('express');

// Instanciation d'un nouveau Routeur Express
const blogRouter = new express.Router();

blogRouter.get('/', (request, response) => {
    const name = "Robin";
    response.render('index.pug', { name });
});

blogRouter.get('/admin', (request, response) => {
    response.render('./admin/admin.pug');
});

blogRouter.get('/edit', (request, response) => {
    response.render('./admin/edit.pug');
});

blogRouter.get('/write', (request, response) => {
    response.render('./admin/write.pug');
});

// Exporte le routeur
module.exports = blogRouter;