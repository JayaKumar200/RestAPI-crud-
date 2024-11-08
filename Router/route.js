const express = require('express');

const router = express.Router();

const controllers = require('../controller/controll.js')

router.get('/get',controllers.getControll);

router.post('/post',controllers.createControll);


router.put('/put/:id',controllers.updateControll);

router.delete('/delete/:id',controllers.deleteControll);


module.exports = router;