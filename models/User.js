const { Schema, model} = require("mongoose");

const userSchema =new Schema( {
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required : true,
        unique: true,
        match: [/.+@.+\..+/, "matchy matchy!"]

    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "thou",


    }
],
friends: [
    {
    type: Schema.Types.ObjectId,
    ref: "User"
    },
],
},
{
    toJson: {
        virtuals:true,
    },
    id:false,
}

     
   
);
userSchema.virtual ("friendCount").get(function(){
    return this.friends.length;
})