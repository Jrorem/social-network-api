const { Schema, model } = require('mongoose');

const userSchema = new Schema({
        username: {
            type: String, 
            unique: true, 
            required: true,
            trime: true
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        thoughts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
            }
        ]
    }
);

userSchema.virtual('friendCount').get(function (){
    return this.friends.length;
});

const User = mongoose.model('User', userSchema);

module.exports = User;