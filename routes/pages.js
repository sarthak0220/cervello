const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    let title = "Cervello";
    let hotels = "Our Hotels";
    res.render("index", { title, hotels });
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