const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Make email a required field
    unique: true, // Ensure emails are unique in the database
  },
  verificationToken: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false, // Set the default value to false
  },
  isWelcomeEmailSent: {
    type: Boolean,
    default: false,
  },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;