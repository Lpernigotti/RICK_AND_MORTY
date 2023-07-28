const {getCharById} = require('../controllers/getCharById');
const {login, register} = require('../controllers/login');
const {deleteFav} = require('../controllers/deleteFav');
const { postFav } = require ('../controllers/postFav');
const { postUser } = require ( '../controllers/postUser');

const router = require('express').Router();

router.get('/character/:id', (req,res) => {
    getCharById(req,res);
});

router.get('/login', (req,res)=>{
    login(req,res);
});

router.post('/fav', (req,res) => {
    postFav(req, res);
});

router.delete('/fav/:id', (req, res)=> {
    deleteFav(req, res);
});

router.post('/login', (req,res) => {
    postUser(req,res);
});

module.exports = router;