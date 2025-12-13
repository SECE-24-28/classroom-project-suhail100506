const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 5, max: 18 },
    department: { type: String },
    marks: { type: Number, min: 0, max: 100 }
},
    { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);