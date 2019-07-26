const Names = require('../models/names')
const express = require('express')
const router = express.Router();

router.post('/:name', (req, res)=>{

    const name = new Names({name : req.params.name});
    name.save((err, data)=>{
        if(err) throw err;
        res.json(data)
    })
})

module.exports = router;