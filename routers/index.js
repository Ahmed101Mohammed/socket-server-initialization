// Modules:
const router = require('express').Router();
const path = require('path');

// routes:
router.route('')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    })

// export:
module.exports = router;