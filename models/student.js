const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
    },
    user: {
        type: mongoose.Types.Schema.ObjectId,
        ref: 'user',
    },
    program: {
        type: mongoose.Types.Schema.ObjectId,
        ref:'program'
    },
    batch:{
        type: Date,
    },
    active: {
        type: Boolean,
        default:false,
    }
});

//Export model
module.exports = mongoose.model("student", studentSchema);
