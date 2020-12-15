const mongoose = require('mongoose')
const { default: validator } = require('validator')
const validate = require('validator')

const corSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(val){
            if(!validator.isEmail){
                throw new Error('invalid email')
            }
        }
    },
    phone : {
        type : Number,
        required : true
    },
    coronaSym : {
        type : Array,
        default : []
    },
    msg : {
        type : String
    }
})

const Coronadata = new mongoose.model('Coronadata', corSchema)

module.exports = Coronadata;