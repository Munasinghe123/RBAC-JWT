const express = require('express');
const verifyToken = require('../Middleware/AuthMiddleware');
const authorizeRoles = require('../Middleware/RoleMiddleware');

const { getAllUsers, register, deleteMember, getUserById, updateUser } = require('../Controller/AuthController');


const router = express.Router();

//admin only
router.get('/getAllUsers', verifyToken, authorizeRoles("admin"), getAllUsers)
router.post('/register', verifyToken, authorizeRoles("admin"), register)
router.delete('/deleteMember/:id', verifyToken, authorizeRoles("admin"), deleteMember)
// router.get('/getUserById/:id', verifyToken, authorizeRoles("admin"), getUserById)
router.get('/getUserById/:id', verifyToken, authorizeRoles("admin"), getUserById);
router.put('/updateUser/:id', verifyToken, authorizeRoles("admin"), updateUser);

//faculty only
router.get('/faculty', verifyToken, authorizeRoles("admin", "faculty"), (req, res) => {
    res.json({ message: 'welcome manager' });
})

//student only

router.get('/student', verifyToken, authorizeRoles("admin", "student"), (req, res) => {
    res.json({ message: 'welcome user' });
})

module.exports = router;
