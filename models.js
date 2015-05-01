var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');


var userSchema = mongoose.Schema({
	"name" : { type: String },
  "ig_id" : { type: String},
	"ig_access_token" : { type: String },
});

exports.User = mongoose.model('User', userSchema);

