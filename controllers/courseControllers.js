const Course = require("../models/Course");
const Category = require("../models/Category");

exports.createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      //201 is the status code for created
      status: "success",
      data: course,
    }); //;
  } catch (error) {
    res.status(400).json({
      //400 is bad request
      status: "fail",
      message: error.message,
    });
  }
};

exports.getAllCourses = async (req, res, next) => {
  try {
    const categorySlug = req.query.categories; //query is the object that is passed in the url
    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};
    if (categorySlug) {
      filter = { category: category._id };
    }

    const course = await Course.find(filter); //find all courses
    const categories = await Category.find(); //kurslar ve kategorileri getirir

    res.status(200).render("courses", {
      categories: categories,
      courses: course,
      page_name: "courses",
    });
  } catch (error) {
    res.status(400).json({
      //400 is bad request
      status: "fail",
      message: error.message,
    });
  }
};

exports.getCourse = async (req, res, next) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    res.status(200).render("course-single", {
      courses: course,
      page_name: "courses",
    });
  } catch (error) {
    res.status(400).json({
      //400 is bad request
      status: "fail",
      message: error.message,
    });
  }
};
