const mongoose = require("mongoose")

//create schema

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "role is reqiured"],
      enum: ["admin", "organisation", "donar", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "user" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    organisationName: {
      type: String,
      required: function () {
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is require"],
    },
    website: {
      type: String,
    },
    adress: {
      type: String,
      required: [true, "adress is required"],
    },
    phone: {
      type: String,
      reqiured: [true, "phone number is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('users', userSchema);