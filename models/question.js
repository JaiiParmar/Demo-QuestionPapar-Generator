const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const questionSchema = new Schema({
    meta: {
        faculty: {
            type: mongoose.Types.Schema.ObjectId,
            ref: 'faculty',
        },
        program: {
            type: mongoose.Types.Schema.ObjectId,
            ref:'program',
        },
        course : {
            type: mongoose.Types.Schema.ObjectId,
            ref: 'course',
        },
    },
    text: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        default: 'easy',
    },
    mark: {
        type: Number,
        min: 1,
        required:true,
    },
    type: {
        type: String,
        enum: ['theory', 'MCQ', 'true/false','yes/no',/**or any other*/],
        default: 'theory',
    },
    options: {
        type: Array,
        required: function () {
            return this.type !== 'theory';
        },
        default: function () {
            if (this.type === 'true/false')
                return ['true', 'false'];
            if (this.typp === 'yes/no')
                return ['yes', 'no'];
            return undefined;
        },
    },
    //Answerr... uhm... thnking on it...whether to make it embeded or not...!!!!
    // I think embeded answer will make a good choice. cz thn we also have to store the questions in Question_paper's collection. and if we already have created a question paper and let's say, we then delete the question from the question_bank... so, than what will happend.......... uhhhm... I don't know...

    //or..... let just don't think about storing answers.. cz.. we right now we are not working on question and all.. so. okay! cool!
});

//Export model
module.exports = mongoose.model("question", questionSchema);
