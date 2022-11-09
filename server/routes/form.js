const router = require("express").Router();

router.get("/api/userForm", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });
    } catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;