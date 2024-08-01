const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

mongoose.connect(url)
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('UserData', UserSchema);

module.exports = {
  UserModel
};
