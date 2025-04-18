const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.render("index");
})

router.get("/register", (req, res) => {
    res.render("register");
})

router.get("/hotel", (req, res) => {
    res.render("hotel");
})

router.get("/gallery", (req, res) => {
    res.render("gallery");
})

router.get("/dining", (req, res) => {
    res.render("dining");
})
router.get("/login", (req, res) => {
    res.render("login", { message: "" });
});



module.exports = router;
