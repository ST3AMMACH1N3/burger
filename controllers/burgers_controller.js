const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(burgers => {
        res.render('index', {burgers});
    });
});

router.post('/api/burger', (req, res) => {
    burger.create(req.body.name, () => {
        res.end();
    });
})

router.put('/api/burger/:id', (req, res) => {
    burger.devour(req.params.id, () => {
        res.end();
    });
})