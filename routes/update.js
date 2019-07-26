const Names = require('../models/names');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.put('/:field/:update', (req, res)=>{

    Names.findOne({name : req.params.field}, (err, data)=>{
        if(err) throw err;
        data.name = req.params.update
        data.save((err, data)=>{
            if(err) throw err;
            res.json(data)
        })
    });
});

module.exports = router