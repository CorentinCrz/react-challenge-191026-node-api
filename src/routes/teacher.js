const express = require('express');
const router = express.Router();

import teacher from '../controllers/teacher';

router.get('/', teacher.get);
router.put('/:id', teacher.update);

module.exports = router;