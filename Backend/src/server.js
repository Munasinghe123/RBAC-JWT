const express = require('express');
const dotenv = require('dotenv').config();
const dbConnection = require('./Config/dbConnection');
const authRoutes = require('./Routes/AuthRoutes');
const userRoutes = require('./Routes/UserRoutes')
const cors = require('cors');

console.log("Port:", process.env.PORT);  // Debugging

//dbconnstion
dbConnection();

const app = express();

// Enable CORS for all routes
app.use(cors());

//middle ware
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//port
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})

//jaya RBAC