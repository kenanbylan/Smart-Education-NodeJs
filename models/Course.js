const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category", //ref is the name of the model
  },
});

CourseSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, { lower: true, strict: true });
  next();
});

const Course = mongoose.model("Course", CourseSchema); //model is a constructor function
module.exports = Course; // Course is the name of the collection in mongoDB
