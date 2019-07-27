const express = require('express');
const router = express.Router();
const Entry = require('../models/entry.model');

// get entries
router.get('/get/entry', (req, res) => {
    const value = req.query.value;
    Entry.find(
        {
            "$or": [
                {"firstName": {$regex: `.*${value}.*`}},
                {"lastName": {$regex: `.*${value}.*`}},
                {"phoneNumber": {$regex: `.*${value}.*`}}
            ]
        }, (err, data) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, entries: data});
        });
});

module.exports = router;
