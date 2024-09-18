const moongoose = require('mongoose');

moongoose.connect("mongodb://localhost:27017/");
console.log("Connected to database");

const userSchema = new moongoose.Schema({
    username: {
        type : String,
        required : true,
        uniquue : true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password:{
        type :String,
        required : true,
        minLength: 6,
    },
    firstName:{
        type:String,
        required:true,
        trim: true,
        maxLength: 50
    },
    lastName:{
        type:String,
        required:true,
        trim: true,
        maxLength: 50
    },
});

const accountSchema = new moongoose.Schema({
    userId:{
        type : moongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance:{
        type: Number,
        required: true,
    }
});

const User = moongoose.model('User', userSchema);
const Account = moongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account,
};
