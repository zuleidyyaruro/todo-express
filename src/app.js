require('dotenv').config();
const express = require('express');
const app = express();

// routes
const tasksRoutes = require('./tasks/tasks.routes').router;

app.use(express.json());

// endpoints
app.use('/api/v1', tasksRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})