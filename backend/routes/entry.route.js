const express = require('express');
const router = express.Router();
const Entry = require('../models/entry.model');

// get entries
router.get('/get/entry', (req, res) => {
    Entry.find((err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});

module.exports = router;
