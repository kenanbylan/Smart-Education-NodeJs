const Category = require("../models/Category");

exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      //201 is the status code for created
      status: "success",
      data: category,
    }); //;
  } catch (error) {
    res.status(400).json({
      //400 is bad request
      status: "fail",
      message: error.message,
    });
  }
};
