const express = require('express');
const verifyToken = require('../Middleware/AuthMiddleware');
const authorizeRoles = require('../Middleware/RoleMiddleware');

const { getAllUsers, register } = require('../Controller/AuthController');


const router = express.Router();


//admin only

// router.get('/admin', verifyToken, authorizeRoles("admin"), (req, res) => {
//     console.log('welcome admin');
//     res.json({ message: 'welcome admin' });

// })

router.get('/getAllUsers', verifyToken, authorizeRoles("admin"), getAllUsers)
router.post('/register', verifyToken, authorizeRoles("admin"), register)


//faculty only
router.get('/faculty', verifyToken, authorizeRoles("admin", "faculty"), (req, res) => {
    res.json({ message: 'welcome manager' });
})

//student only

router.get('/student', verifyToken, authorizeRoles("admin", "student"), (req, res) => {
    res.json({ message: 'welcome user' });
})

module.exports = router;
