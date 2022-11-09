const mongoose = require('mongoose');
const Joi = require('joi');

const userFormSchema = new mongoose.Schema({
    salary: { type: String, required: true },
	mortgage: { type: String },
	vehicle: { type: String },
	utilities: { type: String },
	groceries: { type: String },
	expenditures: { type: String },
	savings: { type: String },
})

const validate = (data) => {
	const schema = Joi.object({
		salary: Joi.string().label(""),
		mortgage: Joi.string().label(""),
		vehicle: Joi.string().label(""),
		utilities: Joi.string().label(""),
		groceries: Joi.string().label(""),
		expenditures: Joi.string().label(""),
		savings: Joi.string().label(""),
	});
	return schema.validate(data);
};

module.exports = { userFormSchema, validate }