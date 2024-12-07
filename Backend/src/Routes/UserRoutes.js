const express = require('express');
const verifyToken = require('../Middleware/AuthMiddleware');
const authorizeRoles = require('../Middleware/RoleMiddleware');


const router = express.Router();

router.get('/admin', verifyToken, authorizeRoles("admin"), (req, res) => {
    console.log('welcome admin');
    res.json({ message: 'welcome admin' });

})

router.get('/faculty', verifyToken, authorizeRoles("admin", "faculty"), (req, res) => {
    res.json({ message: 'welcome manager' });
})

router.get('/student', verifyToken, authorizeRoles("admin", "student"), (req, res) => {
    res.json({ message: 'welcome user' });
})

module.exports = router;
