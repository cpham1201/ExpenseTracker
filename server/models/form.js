const mongoose = require('mongoose');
const Joi = requrie('joi');

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
		salary: Joi.string().required().label(""),
		mortgage: Joi.string().required().label(""),
		vehicle: Joi.string().required().label(""),
		utilities: Joi.string().required().label(""),
		groceries: Joi.string().required().label(""),
		expenditures: Joi.string().required().label(""),
		savings: Joi.string().required().label(""),
	});
	return schema.validate(data);
};

module.exports = { userFormSchema, validate }