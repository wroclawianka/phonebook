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

router.post('/post/entry', (req, res) => {
    const entry = new Entry();
    console.log(req.body);
    entry.firstName = req.body.firstName;
    entry.lastName = req.body.lastName;
    entry.phoneNumber = req.body.phoneNumber;
    console.log(entry);
    entry.save((err) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
})

module.exports = router;
