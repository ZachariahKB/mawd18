const router = require("express").Router();

router.use((req, res) => {
    return res.send ("OOPS");
})

module.exports= router;