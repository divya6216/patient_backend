const router = require('express').Router();

const userController = require('../controllers/user.controller');

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/create-record', userController.createRecord)
router.post('/edit-record', userController.editRecord)
router.delete('/delete-record/:id', userController.deleteRecord)
router.get('/records', userController.getRecords)
router.get('/record/:id', userController.getRecordById)

module.exports = router;