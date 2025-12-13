const express = require('express');
const Student = require('../models/Student');
const { getStudents, createStudent } = require('../Controller/studentsController');
const router = express.Router();

router.get('/', getStudents);

router.post('/', createStudent);

module.exports = router;
