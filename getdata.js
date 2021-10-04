

const express = require('express');
const router = express.Router();
router.get("/getData", async (req, res) => {
    try {
        let getData = await Progress.findOne({})
        if(getData != null || getData != undefined) {
            return res.status(200).send(getData)
        } else {
            return res.status(500).send({ message: "Something Went Wrong!" })
        }
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error." })
    }
})
module.exports = router;