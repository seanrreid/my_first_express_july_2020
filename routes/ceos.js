const express = require('express');
const router = express.Router();
const ceosModel = require("../models/ceosModel");

router.get("/", async (req, res) => {
    const executiveData = await ceosModel.getAll();

    res.render("template", {
        locals: {
            title: "Apple CEOs",
            data: executiveData
        },
        partials: {
            partial: "partial-ceos"
        }
    })

});

module.exports = router;