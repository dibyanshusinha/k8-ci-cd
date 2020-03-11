const router = require('express').Router();
const publicRoutes = require('./public.routes');

router.use('/public', publicRoutes);


module.exports = router;