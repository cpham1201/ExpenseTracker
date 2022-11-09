const router = require("express").Router();
const userFormSchema = require("../models/form")

router.get("/api/userForm", async (req, res) => {
    try {
        res.status(200).json(await userFormSchema.find({}));
        if (error)
            return res.status(400).send({ message: error.details[0].message });
    } catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;