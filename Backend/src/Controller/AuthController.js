const model = require('../Model/UserModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new model({ name, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: `new user created with name ${name}` });
        console.log("new user created")
    } catch (err) {
        console.log(err);
    }
}

const login = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await model.findOne({ name });

        if (!user) {
            return res.status(401).json({ message: "no such users" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "password doesnt match" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "somethig happened while loginig in" })
    }
}

module.exports = {
    register, login
}
