const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String,
        required: true, // 表示该字段是必需的
        unique: true // 表示该字段唯一
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: 'string',
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    }
})
usersSchema.index({id: 3});
module.exports = mongoose.model('users', usersSchema)


