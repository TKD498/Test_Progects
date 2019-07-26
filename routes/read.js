const Names = require('../models/names')
const express = require('express');
const router = express.Router()

router.get('/', (req, res)=>{
    
    Names.find({}, (err, data)=>{
        if(err)throw err;
        res.json(data)
    })
})

module.exports = router;