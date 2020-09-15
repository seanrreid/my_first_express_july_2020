const express = require('express');
const router = express.Router();
const ceosModel = require("../models/ceosModel");

router.get("/", async (req, res) => {
    const executiveData = await ceosModel.getAll();

    let snippet = `<h1>CEOs of Apple</h1>`;
    snippet += `<ul>`
    executiveData.map(executive => {
        snippet += `<li>${executive.name}: ${executive.year}</li>`
    });
    snippet += `</ul>`;
    res
        .status(200)
        .send(snippet)
        .end();
});

module.exports = router;