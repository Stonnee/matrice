const express = require('express');
const router = express.Router();

const statsCtrl = require('../Controller/stats');

router.get('/', statsCtrl.getAll);
router.get('/:id', statsCtrl.getOne);
router.get('/stats/tables', statsCtrl.getTables);
router.get('/stats/:id', statsCtrl.getStats);
/*
router.get('/tags', )*/
router.get('/stat/note', statsCtrl.getNote)
 

router.post('/stats/table', statsCtrl.postStats);
/*router.post('/tags', )*/
router.post('/stat/note', statsCtrl.postNote)


router.put('/stats/:id', statsCtrl.putStat)
/*
router.put('/tags/:id', )*/
router.put('/stat/note/:id', statsCtrl.putNote)


//router.delete('/tags/:id', )
router.delete('/stat/note/:id', statsCtrl.delNote) 
router.delete('/stats/:id', statsCtrl.delStats);

module.exports = router;