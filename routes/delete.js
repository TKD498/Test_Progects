const Names = require('../models/names')
const express = require('express');
const router = express.Router();

router.get('/:delname', (req, res)=>{
    
    Names.findOne({ name : req.params.delname}, (err, data)=>{
        if(err) throw err;
        data.remove((err, data)=>{
            if(err) throw err;
            res.json(data)
        })
    })
});

module.exports = router