const Users = require('../modules/signup');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', (req, res)=>{
    
    const user = new Users(req.body);

    bcrypt.hash(req.body.pwd, 10, (err, hash)=>{
            if(err) throw err;
            user.pwd = hash
            user.save((err, data)=>{
                if(err) throw err;
                res.redirect('/');
            });
        });
    });

module.exports = router;