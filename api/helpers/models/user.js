module.exports = require ('../models')('User', {
    firstName               : { type: String, trim: true, default: ''},
    middleName              : { type: String, trim: true, default: null},
    lastName                : { type: String, trim: true, default: ''},
    displayName             : { type: String, trim: true },
    email                   : { type: String, trim: true, default: '' },
    username                : { type: String, unique: 'Username already exists', required: 'Please fill in a username', lowercase: true, trim: true },
    password                : { type: String, required: 'Please fill in a password' },
    salt                    : { type: String },
    roles                   : [{ type: String}],
    updated                 : { type: Date },
    created                 : { type: Date, default: Date.now },
    title                   : { type:String, default: '' },
    phoneNumber             : { type:String, default: '' },
    salutation              : { type:String, default: '' },
    department              : { type:String, default: '' },
    faxNumber               : { type:String, default: '' },
    cellPhoneNumber         : { type:String, default: '' },
    address1                : { type:String, default: '' },
    address2                : { type:String, default: '' },
    city                    : { type:String, default: '' },
    province                : { type:String, default: '' },
    country                 : { type:String, default: '' },
    postalCode              : { type:String, default: '' },
    notes                   : { type:String, default: '' },
});
