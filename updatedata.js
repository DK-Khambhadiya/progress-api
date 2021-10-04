

const express = require('express');
const router = express.Router();
router.post("/updateData", async (req, res) => {
    try {
        let data = await Progress.findOneAndUpdate({}, {
            $set: {
                participant: req.body.participant,
                percent: req.body.percent
            }
        }, {
            new: true
        })
        if(data != null || data != undefined) {
            console.log("data: ", data);
            return res.status(200).send({ message: "success" })
        } else {
            return res.status(500).send({ message: "Something Went Wrong!" })
        }
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).send({ message: "Internal Server Error." })
    }
})
module.exports = router;