const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.get('/', async (req, res) => {
    const students = await Student.find();
    try {
        res.json(students);
    } catch (err) {
        res.status(404).json({ error: "Students Not Found" });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, age, department, marks } = req.body;
        const student = await Student.create({ name, age, department, marks });
        res.status(201).json({ message: 'Student Created Successfully', student });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
