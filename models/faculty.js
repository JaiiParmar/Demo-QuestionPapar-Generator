const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
    },
    user: {
        type: mongoose.Types.Schema.ObjectId,
        ref: 'user',
    },
    courses: [
        {
            program: {
                type: mongoose.Types.Schama.ObjectId,
                ref: 'program',
            },
            course: {
                typy: mongoose.Types.Schema.ObjectId,
                ref: 'course',
            }
        }
    ],
});

//Export model
module.exports = mongoose.model('faculty', facultySchema);