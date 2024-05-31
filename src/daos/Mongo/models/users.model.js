import mongoose from "mongoose";

const { Schema } = mongoose;

const usersCollection = "users"

const usersSchema = new Schema({
    first_name: {
    type: String,
    required: true,
},
last_name: {
    type: String,
    required: true,
},

email: {
    type: String,
    required: true,
    unique: true,
    index: true
},
password: {
    type: String,
    required: true
    
},
role: {
    type: String,
    enum: ["USER","PREMIUM", "ADMIN"],
    default: "USER",
},
age:{
    type: Number
},
cartID:{
type: mongoose.Schema.Types.ObjectId,
ref: "carts"
},
Active: {
    type: Boolean,
    default: true, 

},
 // Nueva propiedad documents
 documents: [{
    name: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    }
}],
// Nueva propiedad last_connection
last_connection: {
    type: Date
}
});

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel