const router = require('express').Router();
//apis suck
const apiRoutes = require('./api');
//aspijaiodsjo

router.use('/api', apiRoutes);
//apoeifjoedafkaednf

router.use((req, res) => {
    res.status(404).send('404 Error!');
});

module.exports = router;