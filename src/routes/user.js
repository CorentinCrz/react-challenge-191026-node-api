const express = require('express');
const router = express.Router();

import user from '../controllers/user';

router.get('/', user.get);
// router.post('/', message.post);
// router.delete('/:id', message.delete);
// router.put('/:id', message.update);

module.exports = router;