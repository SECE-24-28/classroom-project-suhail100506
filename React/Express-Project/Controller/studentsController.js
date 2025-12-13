const Student = require('../models/Student');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        if (students) {
            res.status(200).json(students);
        } else {
            res.status(404).json({ error: "Students Not Found" });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const createStudent = async (req, res) => {
    try {
        const { name, age, department, marks } = req.body;
        const student = await Student.create({ name, age, department, marks });
        res.status(201).json({ message: 'Student Created Successfully', student });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getStudents, createStudent };