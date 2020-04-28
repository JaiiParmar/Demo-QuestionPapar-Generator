const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const courseSchema = new Schema({
    //if want to provide program code?
    course_code: {
        type: String,
        minlength: 3,
        maxlength: 6,
        required: true,
        unique: true,
        //reged???
    },
    course_name: {
        type: String,
        maxlength: 50,
        required: true,
    },
    program: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'program'
    },
    optional: {
        type: Boolean,
        default: false,
    },
});

//Export model
module.exports = mongoose.model('course', courseSchema);
