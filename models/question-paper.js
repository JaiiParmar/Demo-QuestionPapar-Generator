const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionPaperSchema = new Schema({
    meta: {
        faculty: {
            type: mongoose.Types.Schema.ObjectId,
            ref: 'faculty',
        },
        program: {
            type: mongoose.Types.Schema.ObjectId,
            ref: 'program',
        },
        course: {
            type: mongoose.Types.Schema.ObjectId,
            ref: 'course',
        },
        // creation_date: {
        //     type: Date,
        //     default: Date.now(),
        // }
    },
    Questions: [/** ...Array of Questions... */,/** ...Array of files(pdf, word, etc..)*/  ],
    total_mark: {
        type: Number,
        required: true,
    },
    time_duration: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        enum:['easy', 'medium', 'hard'],
        default: 'easy',
    },
    create_date: {
        type: Date,
        require: true,
        default:Date.now()
    },
    instructions: [ String ],
});

//Export model
module.exports = mongoose.model("question-paper", questionPaperSchema);
