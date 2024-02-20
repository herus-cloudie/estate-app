import {Schema , model , models} from 'mongoose'

let UserSchema = new Schema({
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    createdAt : {
        type : Date,
        default : () => Date.now(),
        immutable : true
    },   
    mailBox : {
        type : [String],
    },
    savedAdv : {
        type : [Object]
    },
    role : {
        type : String,
        default : "USER"
    }
})

let advertisementSchema = new Schema({
    email : {
        type : String
    },
    title: {
        type : String,
        require : true
    },
    description: {
        type : String,
        require : true
    },

    location: {
        type : String,
        require : true
    },
    phone: {
        type : String,
        require : true
    },    
    transaction: {
        type : String,
        require : true
    }, 
    meterage: {
        type : Number,
        require : true
    },
    price: {
        type : Number
    },
    mortgage: {
        type : Number,
    },
    rent: {
        type : Number,
    },
    realState: {
        type : String,
        require : true
    },
    category: {
        type : String,
        enum : ["villa" , "store" , "apartment" , "office"],
        require : true
    },
    amenities: {
        type : [String],
        require : true
    },
    rules: {
        type : [String],
        require : true
    },
    constructionDate: {
        type : Date,
        require : true
    },
    publish : {
        type : Boolean,
        default : false
    }
} , {timestamps : true}
)

let Advertisement = models.advertisement || model("advertisement" , advertisementSchema)
let UserEstate = models.UserEstate || model("UserEstate" , UserSchema)

export {UserEstate , Advertisement}